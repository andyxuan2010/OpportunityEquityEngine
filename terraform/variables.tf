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
  description = "App Service Plan SKU. F1 is the free tier for testing and learning; use B1 or higher for production workloads."
  type        = string
  default     = "F1"
}

variable "dotnet_version" {
  description = "ASP.NET Core runtime version exposed by the Linux App Service application stack."
  type        = string
  default     = "10.0"

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

variable "health_check_eviction_time_in_min" {
  description = "Minutes an unhealthy instance remains in the load balancer before eviction."
  type        = number
  default     = 5

  validation {
    condition     = var.health_check_eviction_time_in_min >= 2 && var.health_check_eviction_time_in_min <= 10
    error_message = "health_check_eviction_time_in_min must be between 2 and 10 minutes."
  }
}

variable "enable_easy_auth" {
  description = "Enable Azure App Service Easy Auth. Provider-specific client IDs must also be supplied before enabling."
  type        = bool
  default     = false
}

variable "google_client_id" {
  description = "Google OAuth web client ID for App Service Easy Auth."
  type        = string
  default     = ""
}

variable "google_client_secret_setting_name" {
  description = "App Service setting name containing the Google OAuth client secret, preferably a Key Vault reference."
  type        = string
  default     = "GOOGLE_CLIENT_SECRET"
}

variable "facebook_app_id" {
  description = "Facebook OAuth app ID for App Service Easy Auth."
  type        = string
  default     = ""
}

variable "facebook_app_secret_setting_name" {
  description = "App Service setting name containing the Facebook OAuth app secret, preferably a Key Vault reference."
  type        = string
  default     = "FACEBOOK_APP_SECRET"
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
