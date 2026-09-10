variable "subscription_id" {
  description = "Azure subscription ID. Leave empty to use the provider's normal Azure CLI or ARM_* authentication context."
  type        = string
  default     = ""
}

variable "location" {
  description = "Azure region for the resource group and App Service resources."
  type        = string
  default     = "canadacentral"
}

variable "environment" {
  description = "Deployment environment used in resource naming and tags."
  type        = string
  default     = "dev"

  validation {
    condition     = can(regex("^[a-z0-9-]{1,12}$", var.environment))
    error_message = "environment must contain 1-12 lowercase letters, numbers, or hyphens."
  }
}

variable "workload" {
  description = "Short workload name used in generated Azure resource names."
  type        = string
  default     = "opportunity"

  validation {
    condition     = can(regex("^[a-z0-9-]{1,20}$", var.workload))
    error_message = "workload must contain 1-20 lowercase letters, numbers, or hyphens."
  }
}

variable "resource_group_name" {
  description = "Optional resource group name override."
  type        = string
  default     = ""
}

variable "app_service_plan_name" {
  description = "Optional App Service Plan name override."
  type        = string
  default     = ""
}

variable "app_service_name" {
  description = "Optional globally unique App Service name override."
  type        = string
  default     = ""
}

variable "app_service_plan_sku_name" {
  description = "App Service Plan SKU. B1 is a low-cost starting point; use P1v3 or higher for production workloads."
  type        = string
  default     = "B1"
}

variable "dotnet_version" {
  description = "ASP.NET Core runtime version exposed by the Linux App Service application stack."
  type        = string
  default     = "8.0"

  validation {
    condition     = contains(["8.0", "9.0", "10.0"], var.dotnet_version)
    error_message = "dotnet_version must be one of the supported application-stack values: 8.0, 9.0, or 10.0."
  }
}

variable "always_on" {
  description = "Keep the application loaded. Enable this for production SKUs that support it."
  type        = bool
  default     = false
}

variable "health_check_path" {
  description = "HTTP path App Service uses to check application health."
  type        = string
  default     = "/health"
}

variable "app_settings" {
  description = "Additional non-secret App Service settings. OAuth credentials must be supplied through secure deployment configuration."
  type        = map(string)
  default     = {}
}

variable "tags" {
  description = "Additional Azure resource tags."
  type        = map(string)
  default = {
    ManagedBy = "Terraform"
    Project   = "OpportunityEquityEngine"
  }
}
