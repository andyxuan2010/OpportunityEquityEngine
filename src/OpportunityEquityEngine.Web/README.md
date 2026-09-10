# Opportunity Equity Engine — front-end demo

This is a self-contained, static front-end prototype for the student experience described in the architecture and demo-deliverables documents.

The frontend is served by the ASP.NET Core host at the App Service root, or run it locally with any static file server. It uses demo records and browser `localStorage` for the profile, saved opportunities, review decisions, and appearance preference; it does not require a backend or API key.

The prototype includes:

- a profile-first dashboard with transparent match scores and reasons;
- searchable, filterable opportunities with detail and official-source links;
- saved opportunities with a next action and deadline view;
- a small review queue showing the publish-quality workflow;
- responsive desktop/mobile layouts and a light/dark appearance toggle.

The data is intentionally marked as demo data in the detail view. Current eligibility, dates, costs, and application requirements should always be confirmed on the linked official source.
