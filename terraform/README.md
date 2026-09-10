# Opportunity Equity Engine Azure App Service

This Terraform configuration provisions the Azure hosting shell for the ASP.NET Core application used by the Opportunity Equity Engine:

- Resource group
- Linux App Service Plan
- Linux App Service with the .NET 10 application stack
- System-assigned managed identity
- HTTPS-only access and TLS 1.2 minimum
- `/health` health check

The configuration was adapted to this repository from the runtime and deployment conventions in the local `web-ccoedemo-dotnet` ASP.NET Core repository. The application source and its deployment pipeline remain separate from Terraform.

## Prerequisites

- Terraform 1.6 or later
- Azure CLI authenticated with permission to create App Service resources
- An Azure subscription and an App Service name that is globally unique
- A remote Azure Storage account/container for Terraform state

The provider reads Azure CLI or ARM_* authentication context. No credentials are stored in this directory.

## Initialize

Use an external Terraform data directory so provider and module caches are kept
outside this repository:

```powershell
$env:TF_DATA_DIR = "C:\terraform-cache\repos\andyxuan2010\app-service-oee-demo"
```

Terraform downloads remote modules into that cache. It does not vendor them into
the repository. Do not run Terraform from this directory without setting
`TF_DATA_DIR`, or Terraform will create a local `.terraform` directory.

From this directory, configure the remote backend during initialization:

```powershell
terraform init `
  -backend-config="resource_group_name=<state-resource-group>" `
  -backend-config="storage_account_name=<state-storage-account>" `
  -backend-config="container_name=<state-container>" `
  -backend-config="key=opportunity-equity-engine/appservice.tfstate"
```

For the dev environment, use its checked-in backend settings and variables:

```powershell
$env:TF_DATA_DIR = "C:\terraform-cache\repos\andyxuan2010\app-service-oee-demo"
terraform init -backend-config="environments/dev/backend.hcl"
terraform plan -var-file="environments/dev/terraform.tfvars"
```

The state storage account should have blob versioning and restricted access enabled. Do not commit a `.tfstate` file.

## Plan and apply

```powershell
terraform fmt -recursive
terraform validate
terraform plan -var-file="environments/dev/terraform.tfvars" -out=tfplan
terraform apply tfplan
```

Terraform provisions the App Service but does not publish the application package. The repository workflow at `.github/workflows/deploy-opportunity-appservice.yml` builds and deploys the published ASP.NET Core output after the required Azure OIDC secrets are configured.

Configure these secrets in the GitHub `opportunity-dev` environment:

- `AZURE_CLIENT_ID`: application ID of the federated deployment identity
- `AZURE_TENANT_ID`: Microsoft Entra tenant ID
- `AZURE_SUBSCRIPTION_ID`: Azure subscription ID

## App Registration, OAuth, and provision gates

The Terraform uses the public [`azure-template` `appregistration` module](https://github.com/andyxuan2010/azure-template/tree/main/modules/appregistration). The Entra App Registration and service principal are created only when both `enable_app_services` and `enable_app_registration_for_appservice` are true. The `features` map can override either gate using the same reference-style names.

When enabled, the configuration generates the App Service callback `/.auth/login/aad/callback`, configures App Service Easy Auth, writes the generated client ID to `AAD_CLIENT_ID`, and optionally creates a client secret. Prefer setting `app_registration_key_vault_id` so the module stores the generated secret in Key Vault. Never put provider secrets in Git or a Terraform example file.

Google and Facebook Easy Auth remain separately configured through their provider client IDs and secure App Service secret settings. The Entra App Registration does not create Google or Facebook OAuth applications.

The production callback URL is:

```text
https://<app-service-name>.azurewebsites.net/auth/callback
```

Register the same callback URL in the identity provider configuration. If the app is later moved to a custom domain, register that HTTPS callback URL as well.
