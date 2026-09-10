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

From this directory, configure the remote backend during initialization:

```powershell
terraform init `
  -backend-config="resource_group_name=<state-resource-group>" `
  -backend-config="storage_account_name=<state-storage-account>" `
  -backend-config="container_name=<state-container>" `
  -backend-config="key=opportunity-equity-engine/appservice.tfstate"
```

The state storage account should have blob versioning and restricted access enabled. Do not commit a `.tfstate` file.

## Plan and apply

```powershell
Copy-Item terraform.tfvars.example terraform.tfvars
# Edit terraform.tfvars and set a globally unique app_service_name.
terraform fmt -recursive
terraform validate
terraform plan -out=tfplan
terraform apply tfplan
```

Terraform provisions the App Service but does not publish the application package. The repository workflow at `.github/workflows/deploy-opportunity-appservice.yml` builds and deploys the published ASP.NET Core output after the required Azure OIDC secrets are configured.

Configure these secrets in the GitHub `opportunity-dev` environment:

- `AZURE_CLIENT_ID`: application ID of the federated deployment identity
- `AZURE_TENANT_ID`: Microsoft Entra tenant ID
- `AZURE_SUBSCRIPTION_ID`: Azure subscription ID

## OAuth and application settings

The App Service is prepared for the existing ASP.NET Core authentication flow with non-secret settings such as `AAD_TENANT_ID`, `AAD_REDIRECT_PATH`, and `AAD_SCOPES`. Configure `AAD_CLIENT_ID`, `AAD_CLIENT_SECRET`, Google/Facebook client values, and any application secret through App Service settings, Key Vault references, or CI/CD secret variables. Never put those values in Git or a Terraform example file.

The production callback URL is:

```text
https://<app-service-name>.azurewebsites.net/auth/callback
```

Register the same callback URL in the identity provider configuration. If the app is later moved to a custom domain, register that HTTPS callback URL as well.
