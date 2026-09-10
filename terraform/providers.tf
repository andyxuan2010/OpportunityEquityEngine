
terraform {
  required_version = ">=1.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = ">= 4.0, < 5.0"
    }
    azapi = {
      source = "Azure/azapi"
    }
    random = {
      source  = "hashicorp/random"
      version = "~>3.0"
    }
    azuread = {
      source  = "hashicorp/azuread"
      version = ">= 3.0, < 4.0"
    }
    time = {
      source  = "hashicorp/time"
      version = ">= 0.13, < 1.0"
    }
  }
  backend "azurerm" {
    # Configure the environment-specific backend with -backend-config.
  }


  # backend "local" {
  #   path = "terraform.tfstate"
  # }

}

provider "azurerm" {
  subscription_id = var.subscription_id != "" ? var.subscription_id : null
  features {}
}

provider "azuread" {
  tenant_id = var.tenant_id != "" ? var.tenant_id : null
}

provider "time" {}
# data "azurerm_client_config" "current" {}
# #data.azurerm_client_config.current.client_id
# data "azurerm_subscriptions" "available" {}
# #data.azurerm_subscriptions.available.subscriptions

data "azurerm_client_config" "current" {}
