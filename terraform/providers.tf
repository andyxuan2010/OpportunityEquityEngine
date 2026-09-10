provider "azurerm" {
  features {}

  # Authentication is intentionally delegated to the Azure CLI, workload
  # identity, or ARM_* environment variables. No credentials belong here.
  subscription_id = var.subscription_id != "" ? var.subscription_id : null
}

data "azurerm_client_config" "current" {}
