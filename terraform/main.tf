locals {
  generated_suffix    = "${var.workload}-${var.environment}"
  resource_group_name = var.resource_group_name != "" ? var.resource_group_name : "rg-${local.generated_suffix}"
  service_plan_name   = var.app_service_plan_name != "" ? var.app_service_plan_name : "asp-${local.generated_suffix}"
  app_service_name    = var.app_service_name != "" ? var.app_service_name : "app-${local.generated_suffix}"

  effective_app_settings = merge(
    {
      ASPNETCORE_ENVIRONMENT             = var.environment == "prod" ? "Production" : "Development"
      SCM_DO_BUILD_DURING_DEPLOYMENT     = "false"
      WEBSITE_HTTPLOGGING_RETENTION_DAYS = "7"
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
    always_on           = var.always_on
    ftps_state          = "Disabled"
    minimum_tls_version = "1.2"
    health_check_path   = var.health_check_path

    application_stack {
      dotnet_version = var.dotnet_version
    }
  }

  app_settings = local.effective_app_settings

  tags = local.common_tags
}
