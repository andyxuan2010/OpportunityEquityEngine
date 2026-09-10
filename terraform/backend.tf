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
    subscription_id      = "1ec5edd4-5654-4246-8027-b29ef63b3393"
    tenant_id            = "d5b038fb-4b39-41cc-8a10-fba75212180b"
    resource_group_name  = "rg-ccoe-iac-cc-dev"
    storage_account_name = "stccoeiacccdev"
    container_name       = "terraform"
    key                  = "app-service-oee-demo/terraform.tfstate"
  }


  # backend "local" {
  #   path = "terraform.tfstate"
  # }

}

provider "azurerm" {
  subscription_id = "1ec5edd4-5654-4246-8027-b29ef63b3393"
  features {}
}

provider "azuread" {
  tenant_id = "d5b038fb-4b39-41cc-8a10-fba75212180b"
}

provider "time" {}

provider "azurerm" {
  subscription_id = "1ec5edd4-5654-4246-8027-b29ef63b3393"
  features {}
  alias = "prod"
}


## This step has to be done after we provision the subscription resource if they are done through terraform
## Otherwise they can be copied to here as existing resource.
provider "azurerm" {
  subscription_id = "74c3c03d-217f-4138-b9a6-79145d37781a"
  features {}
  alias = "identity"
}
provider "azurerm" {
  subscription_id = "624ce74e-cf6e-4eed-afba-352bcf08bca0"
  features {}
  alias = "management"
}
provider "azurerm" {
  subscription_id = "d3927a5b-0ea7-40e1-bbb5-d3ba34515fb0"
  features {}
  alias = "connectivity"
}
provider "azurerm" {
  subscription_id = "903e61ee-68d8-4fee-aefd-5e207a6b0892"
  features {}
  alias = "security"
}
# data "azurerm_client_config" "current" {}
# #data.azurerm_client_config.current.client_id
# data "azurerm_subscriptions" "available" {}
# #data.azurerm_subscriptions.available.subscriptions
