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

output "app_registration_application_id" {
  description = "Application (client) ID of the App Service Entra app registration, if enabled."
  value       = local.effective_enable_app_registration_for_appservice ? module.app_registration_appservice[0].application_id : null
}

output "app_registration_application_object_id" {
  description = "Object ID of the App Service Entra app registration, if enabled."
  value       = local.effective_enable_app_registration_for_appservice ? module.app_registration_appservice[0].application_object_id : null
}

output "app_registration_client_secret" {
  description = "Client secret created for the App Service Entra app registration, if enabled."
  value       = local.effective_enable_app_registration_for_appservice ? module.app_registration_appservice[0].client_secret : null
  sensitive   = true
}

output "app_registration_web_redirect_uris" {
  description = "Effective web redirect URIs configured on the App Service Entra app registration, if enabled."
  value       = local.effective_enable_app_registration_for_appservice ? module.app_registration_appservice[0].web_redirect_uris : []
}
