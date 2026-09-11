locals {
  generated_suffix             = "${var.workload}-${var.environment}"
  resource_group_name          = var.resource_group_name != "" ? var.resource_group_name : "rg-${local.generated_suffix}"
  service_plan_name            = var.app_service_plan_name != "" ? var.app_service_plan_name : "asp-${local.generated_suffix}"
  app_service_name             = var.app_service_name != "" ? var.app_service_name : "app-${local.generated_suffix}"
  app_registration_name        = trimspace(var.app_registration_name) != "" ? var.app_registration_name : "appreg-${local.generated_suffix}"
  app_service_default_hostname = "${local.app_service_name}.azurewebsites.net"

  feature_flags = {
    enable_app_services                    = lookup(var.features, "enable_app_services", var.enable_app_services)
    enable_app_registration_for_appservice = lookup(var.features, "enable_app_registration_for_appservice", var.enable_app_registration_for_appservice)
  }

  app_registration_display_name                     = var.app_registration_display_name != null && trimspace(var.app_registration_display_name) != "" ? trimspace(var.app_registration_display_name) : local.app_registration_name
  effective_enable_app_registration_for_appservice  = local.feature_flags.enable_app_services && local.feature_flags.enable_app_registration_for_appservice && var.enable_app_registration_for_appservice
  effective_app_service_auth_mode                   = local.effective_enable_app_registration_for_appservice ? (var.app_service_auth_mode == "none" ? "msal" : var.app_service_auth_mode) : "none"
  app_registration_generated_redirect_uri_hostnames = length(var.app_registration_web_redirect_uris) > 0 ? [] : [local.app_service_default_hostname]

  google_client_secret_key_vault_parts = split("/", trim(var.google_client_secret_key_vault_id, "/"))
  google_client_secret_key_vault_name  = length(local.google_client_secret_key_vault_parts) > 7 ? local.google_client_secret_key_vault_parts[7] : ""
  google_client_secret_key_vault_rg    = length(local.google_client_secret_key_vault_parts) > 3 ? local.google_client_secret_key_vault_parts[3] : ""
  google_client_secret_reference       = trimspace(var.google_client_secret_key_vault_id) != "" ? "@Microsoft.KeyVault(SecretUri=${data.azurerm_key_vault.google[0].vault_uri}secrets/${var.google_client_secret_name}/)" : ""
  google_auth_configured               = trimspace(var.google_client_id) != "" && local.google_client_secret_reference != ""
  apple_auth_configured                = trimspace(var.apple_client_id) != ""
  x_auth_configured                    = trimspace(var.x_consumer_key) != ""

  effective_app_settings = merge(
    {
      ASPNETCORE_ENVIRONMENT         = var.environment == "prod" ? "Production" : "Development"
      SCM_DO_BUILD_DURING_DEPLOYMENT = "false"
    },
    var.app_settings,
    local.google_client_secret_reference != "" ? {
      (var.google_client_secret_setting_name) = local.google_client_secret_reference
    } : {}
  )

  common_tags = merge(
    var.tags,
    {
      Environment = var.environment
      Workload    = var.workload
      Runtime     = "ASP.NET Core"
    }
  )
}

data "azurerm_key_vault" "google" {
  count               = trimspace(var.google_client_secret_key_vault_id) != "" ? 1 : 0
  name                = local.google_client_secret_key_vault_name
  resource_group_name = local.google_client_secret_key_vault_rg
}

resource "azurerm_resource_group" "this" {
  name     = local.resource_group_name
  location = var.location
  tags     = local.common_tags
}

resource "azurerm_service_plan" "this" {
  name                = local.service_plan_name
  resource_group_name = azurerm_resource_group.this.name
  location            = azurerm_resource_group.this.location
  os_type             = "Linux"
  sku_name            = var.app_service_plan_sku_name
  tags                = local.common_tags
}

module "app_registration_appservice" {
  count  = local.effective_enable_app_registration_for_appservice ? 1 : 0
  source = "git::https://github.com/andyxuan2010/azure-template.git//modules/appregistration?ref=main"

  display_name                        = local.app_registration_display_name
  web_redirect_uris                   = var.app_registration_web_redirect_uris
  app_service_redirect_hostnames      = local.app_registration_generated_redirect_uri_hostnames
  app_service_auth_mode               = local.effective_app_service_auth_mode
  create_service_principal            = true
  create_client_secret                = var.app_registration_create_client_secret
  add_current_caller_as_owner         = false
  key_vault_id                        = var.app_registration_create_client_secret ? var.app_registration_key_vault_id : null
  client_secret_key_vault_secret_name = var.app_registration_create_client_secret ? local.app_registration_display_name : null
  federated_identity_credentials      = var.app_registration_federated_identity_credentials

  depends_on = [azurerm_service_plan.this]
}

resource "azurerm_linux_web_app" "this" {
  name                = local.app_service_name
  resource_group_name = azurerm_resource_group.this.name
  location            = azurerm_service_plan.this.location
  service_plan_id     = azurerm_service_plan.this.id

  https_only = true

  identity {
    type = "SystemAssigned"
  }

  site_config {
    always_on                         = var.always_on
    ftps_state                        = "Disabled"
    minimum_tls_version               = "1.2"
    health_check_path                 = var.health_check_path
    health_check_eviction_time_in_min = var.health_check_eviction_time_in_min

    application_stack {
      dotnet_version = var.dotnet_version
    }
  }

  app_settings = merge(
    local.effective_app_settings,
    local.effective_enable_app_registration_for_appservice ? {
      AAD_CLIENT_ID = module.app_registration_appservice[0].application_id
    } : {},
    local.effective_enable_app_registration_for_appservice && var.app_registration_create_client_secret ? {
      AAD_CLIENT_SECRET                        = module.app_registration_appservice[0].client_secret
      MICROSOFT_PROVIDER_AUTHENTICATION_SECRET = module.app_registration_appservice[0].client_secret
    } : {}
  )

  dynamic "auth_settings_v2" {
    for_each = var.enable_easy_auth || local.effective_enable_app_registration_for_appservice ? [true] : []

    content {
      auth_enabled           = true
      runtime_version        = "~1"
      require_authentication = !var.app_service_allow_anonymous
      unauthenticated_action = var.app_service_unauthenticated_action
      require_https          = true

      dynamic "active_directory_v2" {
        for_each = local.effective_enable_app_registration_for_appservice && contains(["easy_auth", "both"], local.effective_app_service_auth_mode) ? [true] : []

        content {
          client_id                  = module.app_registration_appservice[0].application_id
          client_secret_setting_name = var.app_registration_create_client_secret ? "AAD_CLIENT_SECRET" : null
          tenant_auth_endpoint       = "https://login.microsoftonline.com/${data.azurerm_client_config.current.tenant_id}/v2.0"
        }
      }

      dynamic "google_v2" {
        for_each = local.google_auth_configured ? [var.google_client_id] : []

        content {
          client_id                  = google_v2.value
          client_secret_setting_name = var.google_client_secret_setting_name
          login_scopes               = ["openid", "profile", "email"]
        }
      }

      dynamic "facebook_v2" {
        for_each = var.facebook_app_id != "" ? [var.facebook_app_id] : []

        content {
          app_id                  = facebook_v2.value
          app_secret_setting_name = var.facebook_app_secret_setting_name
          login_scopes            = ["email", "public_profile"]
        }
      }

      dynamic "apple_v2" {
        for_each = local.apple_auth_configured ? [var.apple_client_id] : []

        content {
          client_id                  = apple_v2.value
          client_secret_setting_name = var.apple_client_secret_setting_name
        }
      }

      dynamic "twitter_v2" {
        for_each = local.x_auth_configured ? [var.x_consumer_key] : []

        content {
          consumer_key                 = twitter_v2.value
          consumer_secret_setting_name = var.x_consumer_secret_setting_name
        }
      }

      login {
        token_store_enabled = true
      }
    }
  }

  tags = local.common_tags
}

resource "azurerm_key_vault_secret" "google_client_secret" {
  count = trimspace(var.google_client_secret_key_vault_id) != "" && trimspace(var.GOOGLE_CLIENT_SECRET) != "" ? 1 : 0

  name         = var.google_client_secret_name
  value        = var.GOOGLE_CLIENT_SECRET
  key_vault_id = var.google_client_secret_key_vault_id
  content_type = "Google OAuth client secret"

  tags = local.common_tags
}

resource "azurerm_role_assignment" "app_service_key_vault_secrets_user" {
  count = trimspace(var.google_client_secret_key_vault_id) != "" ? 1 : 0

  scope                            = var.google_client_secret_key_vault_id
  role_definition_name             = "Key Vault Secrets User"
  principal_id                     = azurerm_linux_web_app.this.identity[0].principal_id
  skip_service_principal_aad_check = true
}
