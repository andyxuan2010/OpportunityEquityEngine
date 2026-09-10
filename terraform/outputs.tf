output "resource_group_name" {
  description = "Resource group containing the Opportunity Equity Engine App Service."
  value       = azurerm_resource_group.this.name
}

output "app_service_plan_id" {
  description = "App Service Plan resource ID."
  value       = azurerm_service_plan.this.id
}

output "app_service_name" {
  description = "Provisioned App Service name."
  value       = azurerm_linux_web_app.this.name
}

output "app_service_default_hostname" {
  description = "Default HTTPS hostname for the provisioned App Service."
  value       = "https://${azurerm_linux_web_app.this.default_hostname}"
}

output "app_service_managed_identity_principal_id" {
  description = "System-assigned managed identity principal ID for downstream Azure permissions."
  value       = azurerm_linux_web_app.this.identity[0].principal_id
}
