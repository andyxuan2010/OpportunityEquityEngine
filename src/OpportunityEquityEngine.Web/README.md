# Opportunity Equity Engine — ASP.NET Core App Service frontend

This is the ASP.NET Core frontend for the Opportunity Equity Engine App Service. Azure App Service Authentication (Easy Auth) is the source of truth for the signed-in account. The frontend reads the authenticated provider identity from `/api/auth/session` and does not contain a hard-coded user profile or password form.

The opportunity catalog and review queue are sample records for the current demo experience. A signed-in user’s matching preferences and saved opportunities are isolated by the authenticated account subject in browser storage; account identity and sign-in state come from App Service Authentication.

The prototype includes:

- a profile-first dashboard with transparent match scores and reasons;
- searchable, filterable opportunities with detail and official-source links;
- saved opportunities with a next action and deadline view;
- a small review queue showing the publish-quality workflow;
- responsive desktop/mobile layouts and a light/dark appearance toggle.

The catalog is intentionally marked as sample data in the detail view. Current eligibility, dates, costs, and application requirements should always be confirmed on the linked official source.
