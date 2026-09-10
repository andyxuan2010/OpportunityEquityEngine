locals {
  generated_suffix    = "${var.workload}-${var.environment}"
  resource_group_name = var.resource_group_name != "" ? var.resource_group_name : "rg-${local.generated_suffix}"
  service_plan_name   = var.app_service_plan_name != "" ? var.app_service_plan_name : "asp-${local.generated_suffix}"
  app_service_name    = var.app_service_name != "" ? var.app_service_name : "app-${local.generated_suffix}"

  effective_app_settings = merge(
    {
      ASPNETCORE_ENVIRONMENT         = var.environment == "prod" ? "Production" : "Development"
      SCM_DO_BUILD_DURING_DEPLOYMENT = "false"
    },
    var.app_settings
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

  app_settings = local.effective_app_settings

  dynamic "auth_settings_v2" {
    for_each = var.enable_easy_auth ? [true] : []

    content {
      auth_enabled           = true
      runtime_version        = "~1"
      require_authentication = false
      unauthenticated_action = "AllowAnonymous"
      require_https          = true

      dynamic "google_v2" {
        for_each = var.google_client_id != "" ? [var.google_client_id] : []

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

      login {
        token_store_enabled = true
      }
    }
  }

  tags = local.common_tags
}
