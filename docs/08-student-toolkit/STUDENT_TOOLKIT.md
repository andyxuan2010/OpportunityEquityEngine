---
layout: default
title: Student Toolkit
locale: en
translation_en: /docs/08-student-toolkit/STUDENT_TOOLKIT.md
translation_zh: /docs/08-student-toolkit/STUDENT_TOOLKIT.CN.md
translation_fr: /docs/08-student-toolkit/STUDENT_TOOLKIT.FR.md
---

# Student Toolkit: Collaborate, Stay Safe, Keep Going

This is the practical reference for the habits that make a student project healthy: collaboration, accessibility, privacy, troubleshooting, and clear communication.

## A simple GitHub workflow

1. Create or choose an issue with a clear outcome and acceptance check.
2. Create a branch such as `docs/add-research-guide` or `feature/save-opportunity`.
3. Make a small change and commit it with a meaningful message.
4. Test locally and open a pull request that explains what changed, how it was tested, and what remains.
5. Ask for review. Respond to feedback by improving the work, not by hiding the problem.
6. Merge only when the checks and review are complete.

Never work directly on `main` unless the team explicitly agrees for a tiny documentation correction.

## Issue template

```text
Goal:
Who benefits:
Out of scope:
Acceptance check:
Evidence or source:
Questions and risks:
```

## Pull request checklist

- The change has one clear purpose.
- The page works on a phone and desktop.
- Links, images, translations, and headings were checked.
- No secrets or unnecessary personal information were added.
- AI-generated code or text was reviewed and understood.
- The description tells the reviewer how to reproduce the result.

## Accessibility is part of quality

Use meaningful headings, readable contrast, descriptive link text, alt text for informative images, labels for form fields, keyboard-friendly controls, and captions or transcripts for important media. Do not use color alone to communicate a status or match result. Test with zoom and a keyboard before asking a student to try the feature.

## Privacy and responsible AI

Collect the smallest amount of student information needed. Avoid real personal data in development; use synthetic examples. Keep API keys on the server or in approved secret storage. Show the source and verification date for opportunity facts. AI may help summarize or explain, but deterministic rules and human review must protect eligibility, deadlines, costs, and safety claims.

## Tools and services that can help

There is no single “correct” technology stack. Pick the smallest set of tools that lets the team research a real need, build a working vertical slice, test it, and explain its limits. A student team should normally choose one tool from each required row instead of signing up for every service in this list.

### Required foundation

| Need | Good starting choices | What it is for |
|---|---|---|
| Source control and review | [Git](https://git-scm.com/doc), [GitHub](https://docs.github.com/en/get-started), GitHub Issues and [Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) | History, teamwork, tasks, decisions, and reviewable changes |
| Website and documentation hosting | [GitHub Pages](https://docs.github.com/en/pages), [Jekyll](https://jekyllrb.com/docs/), [GitHub Actions](https://docs.github.com/en/actions) | Publish the documentation and automatically test or deploy it |
| Coding environment | [Visual Studio Code](https://code.visualstudio.com/docs), [GitHub Codespaces](https://docs.github.com/en/codespaces), [Node.js](https://nodejs.org/en/learn), [Python](https://docs.python.org/3/) | Edit, run, and debug the project locally or in the cloud |
| Browser inspection | [Chrome DevTools](https://developer.chrome.com/docs/devtools/overview), [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/) | Inspect layout, console errors, network requests, storage, and performance |
| Design and user flows | [Figma](https://help.figma.com/hc/en-us), Canva | Wireframes, prototypes, icons, presentation graphics, and usability discussions |

### Data, research, and opportunity sources

| Need | Possible tools or services | Use them for |
|---|---|---|
| Small datasets | CSV, [Google Sheets API](https://developers.google.com/sheets/api), Microsoft [Graph Excel API](https://learn.microsoft.com/en-us/graph/api/resources/excel), [Airtable Web API](https://airtable.com/developers/web/api/introduction) | A manageable opportunity catalog that students can inspect and correct |
| Data cleaning | [OpenRefine](https://openrefine.org/docs), spreadsheet formulas, Python with [pandas](https://pandas.pydata.org/docs/) | Normalize names, dates, locations, categories, and missing values |
| Public and official data | Government open-data portals, [CKAN](https://docs.ckan.org/en/latest/api/), [Socrata APIs](https://dev.socrata.com/), official organization APIs, RSS/Atom feeds | Import current opportunities with a source URL and verification date |
| Research and interviews | [Google Forms API](https://developers.google.com/workspace/forms/api), Microsoft Forms, interviews, observation notes, [Miro](https://miro.com/) | Learn what students actually need before building features |
| Data storage | [Supabase/Postgres](https://supabase.com/docs), [Firebase](https://firebase.google.com/docs), [Azure](https://learn.microsoft.com/en-us/azure/), [Cloudflare D1](https://developers.cloudflare.com/d1/), [Neon](https://neon.tech/docs) | Store opportunities, profiles, saved items, feedback, and audit fields |

For every opportunity record, keep at least: `title`, `provider`, `description`, `eligibility`, `location`, `cost`, `deadline`, `source_url`, `last_verified_at`, and `status`. Do not silently turn missing information into “eligible,” “free,” or “still open.”

### Frontend and interaction choices

| Need | Possible tools | Choose this when |
|---|---|---|
| Simple site | Semantic HTML, CSS, JavaScript, [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) | The project is mostly content, search, filters, and a small amount of state |
| Component-based web app | [React](https://react.dev/learn), [Vue](https://vuejs.org/guide/introduction.html), [Svelte](https://svelte.dev/docs/svelte/overview) | Several screens share reusable components and interactions |
| Full-stack or server-rendered app | [Next.js](https://nextjs.org/docs), [Nuxt](https://nuxt.com/docs), [SvelteKit](https://svelte.dev/docs/kit/introduction), [Astro](https://docs.astro.build/en/getting-started/) | Search, authentication, server-side data access, or structured pages matter |
| Styling | [Tailwind CSS](https://tailwindcss.com/docs/installation), [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/), CSS custom properties | The team needs consistent responsive layouts quickly |
| Charts and dashboards | [Chart.js](https://www.chartjs.org/docs/latest/), [D3](https://d3js.org/getting-started), [Recharts](https://github.com/recharts/recharts) | Show opportunity counts, deadlines, outcomes, or equity indicators |
| Maps and location | [Leaflet](https://leafletjs.com/), [Mapbox](https://docs.mapbox.com/), [OpenStreetMap](https://www.openstreetmap.org/) | Location helps students discover nearby opportunities; respect tile and geocoding usage policies |

### Hosting, backend, and identity

| Need | Possible choices | Important decision |
|---|---|---|
| Static deployment | GitHub Pages, [Cloudflare Pages](https://developers.cloudflare.com/pages/), [Netlify](https://docs.netlify.com/), [Vercel](https://vercel.com/docs), [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/) | Best for a public prototype without private student data |
| Server-side API | [Cloudflare Workers](https://developers.cloudflare.com/workers/), [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/), [Vercel Functions](https://vercel.com/docs/functions), [Netlify Functions](https://docs.netlify.com/build/functions/overview/), [Firebase Cloud Functions](https://firebase.google.com/docs/functions), [Supabase Edge Functions](https://supabase.com/docs/guides/functions) | Keep API keys, matching logic, and privileged database access off the browser |
| Authentication | [Supabase Auth](https://supabase.com/docs/guides/auth), [Firebase Authentication](https://firebase.google.com/docs/auth), [Auth0](https://auth0.com/docs), [Clerk](https://clerk.com/docs), [Microsoft Entra External ID](https://learn.microsoft.com/en-us/entra/external-id/) | Use only if the project truly needs accounts; do not collect passwords yourself |
| Search | Database filters first; [Algolia](https://www.algolia.com/doc/), [Typesense](https://typesense.org/docs/), [Meilisearch](https://www.meilisearch.com/docs), [OpenSearch](https://opensearch.org/docs/latest/) | Add a search service only when the dataset is too large or slow for the database |
| Email and reminders | [Resend](https://resend.com/docs), [SendGrid](https://docs.sendgrid.com/), [Twilio](https://www.twilio.com/docs), [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) | Send opt-in confirmations, deadline reminders, or admin notifications; provide unsubscribe and failure handling |

### APIs and LLMs

Use an LLM for explanation, drafting, classification assistance, semantic matching, translation, or extracting fields from messy text. Use normal code and a reviewed dataset for eligibility, dates, fees, ranking constraints, and other decisions that must be reproducible.

| Provider or approach | Possible use | Student-friendly note |
|---|---|---|
| [OpenAI Responses API](https://developers.openai.com/api/reference/cli/resources/responses/methods/create) | Structured extraction, explanations, embeddings, vision, and tool-using assistants | Strong general-purpose starting point; request structured JSON and validate it |
| [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/) | OpenAI models through an Azure-controlled environment | Consider it when the school already uses Azure identity, billing, or governance |
| [Anthropic Claude](https://docs.anthropic.com/en/docs/build-with-claude/overview) | Long-document analysis, writing, coding, and explanations | Useful for comparing a second model during evaluation |
| [Google Gemini API](https://ai.google.dev/gemini-api/docs) | Multimodal input, extraction, summaries, and chat | Useful when the team already uses Google Cloud or Google AI tooling |
| [Mistral](https://docs.mistral.ai/), [Cohere](https://docs.cohere.com/), [Hugging Face](https://huggingface.co/docs) | Alternative hosted models, multilingual work, retrieval, or experiments | Compare quality, cost, speed, privacy, and rate limits rather than choosing by brand |
| Local models with [Ollama](https://docs.ollama.com/) | Private/offline experiments and low-risk development data | Requires a suitable computer; local does not automatically mean accurate |
| Model gateway or router | [LiteLLM](https://docs.litellm.ai/), provider SDKs, or a small internal adapter | Keep the app independent from one provider and make model substitution testable |
| Retrieval-augmented generation | [pgvector](https://github.com/pgvector/pgvector), [Pinecone](https://docs.pinecone.io/), [Qdrant](https://qdrant.tech/documentation/), [Chroma](https://docs.trychroma.com/), [Weaviate](https://docs.weaviate.io/) | Ground answers in approved opportunity records and show the source used |
| Translation | [DeepL API](https://developers.deepl.com/docs), [Google Cloud Translation](https://cloud.google.com/translate/docs), [Azure Translator](https://learn.microsoft.com/en-us/azure/ai-services/translator/) | Translate drafts, then review names, eligibility, dates, and culturally sensitive wording |

#### Safe LLM pattern for this project

1. Retrieve only the approved records relevant to the question.
2. Ask the model to return a defined schema such as `summary`, `why_it_may_fit`, `source_url`, and `confidence_notes`.
3. Validate the response in code and reject missing source URLs or invalid dates.
4. Show the original source, verification date, and an “AI-assisted” label.
5. Let a student or staff reviewer correct the result and record the correction.

Never put a provider API key in browser JavaScript, commit it to GitHub, or send a student’s unnecessary personal information to a model. Add spending limits, rate limits, timeouts, retries, logging that excludes sensitive data, and a non-AI fallback.

### Testing, accessibility, security, and reliability

| Quality area | Tools and services | Minimum student check |
|---|---|---|
| End-to-end browser tests | [Playwright](https://playwright.dev/docs/intro), [Cypress](https://docs.cypress.io/) | Test the main path on desktop and a narrow phone viewport |
| Unit and data tests | [Vitest](https://vitest.dev/guide/), [Jest](https://jestjs.io/docs/getting-started), [pytest](https://docs.pytest.org/en/stable/) | Test matching rules, date handling, empty states, and bad input |
| Accessibility | [axe-core](https://www.deque.com/axe/core-documentation/), [WAVE](https://wave.webaim.org/), [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview), keyboard testing, [NVDA](https://www.nvaccess.org/about-nvda/), VoiceOver | Check headings, labels, focus order, contrast, zoom, keyboard use, and screen-reader basics |
| Code and dependency security | GitHub [CodeQL](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning), [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts), [Gitleaks](https://github.com/gitleaks/gitleaks), [Trivy](https://github.com/aquasecurity/trivy), [OWASP ZAP](https://www.zaproxy.org/docs/) | Scan before sharing; remove secrets and fix high-risk findings |
| Secret storage | [GitHub Actions secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions), [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview), [Google Secret Manager](https://cloud.google.com/secret-manager/docs/overview), [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) | Keep secrets out of source, screenshots, browser bundles, and issue comments |
| Monitoring and analytics | [Sentry](https://docs.sentry.io/), [PostHog](https://posthog.com/docs), [Plausible](https://plausible.io/docs), [Google Analytics](https://developers.google.com/analytics) | Measure errors and useful outcomes; disclose analytics and avoid unnecessary tracking |
| Backups and uptime | Provider backups, scheduled exports, [Better Stack](https://betterstack.com/docs/), [Better Stack Uptime](https://betterstack.com/uptime) | Know how to restore the data and who receives an outage alert |

### Team communication and project delivery

[GitHub Discussions](https://docs.github.com/en/discussions), [Slack](https://slack.com/help/categories/360000049043-Slack-guides), Microsoft Teams, [Discord](https://support.discord.com/hc/en-us), [Notion](https://www.notion.so/help/guides), Google Docs, and shared calendars can all work. The important part is not the brand: keep one visible decision log, one source-of-truth backlog, meeting notes, owners, deadlines, and links to evidence. Use [GitHub Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) or a short changelog so another student can understand what changed.

## A sensible starter stack

For this project, a low-risk first version could use:

- GitHub repository, Issues, Projects, Actions, and Pages/Jekyll for code, planning, checks, and documentation.
- A reviewed CSV or Google Sheet before adding a database. Move to Supabase/Postgres when students need saved items, accounts, or feedback.
- Semantic HTML/CSS/JavaScript for a simple catalog; add React, Vue, or Svelte only when shared interactive components justify it.
- One server-side API for any LLM or private integration. Start with one model provider and keep the provider behind an adapter.
- Deterministic filters for eligibility and deadlines; an LLM may explain a result but must not be the final authority.
- Playwright, axe, Lighthouse, and a keyboard/phone review in GitHub Actions.
- Sentry or a privacy-conscious analytics tool only after the team has written down what it needs to learn.

This stack is intentionally replaceable. A successful student project is a clear, tested, accessible experience with trustworthy data—not a large number of cloud accounts.

## Non-tool requirements that determine success

Before choosing services, agree on these project rules:

- A defined student audience and two or three measurable outcomes.
- A data dictionary, source registry, verification owner, and refresh schedule.
- A written definition of “match,” including how unknown or expired information is handled.
- Consent, privacy, retention, deletion, and incident-response decisions for student data.
- A small test dataset with expected results, including edge cases and deliberately wrong records.
- A human review path, contact method, and visible way to report an incorrect opportunity.
- A budget owner, free-tier limits, vendor exit plan, backups, and a shutdown procedure.
- A demo script that shows the problem, the user journey, evidence, limitations, and what the team learned.

## When something breaks

Check the browser console, terminal output, network request, file path and spelling. Reproduce the issue with the smallest example. Check whether it is a code bug, data problem, environment problem, or unclear requirement. Record the fix so the next student does not have to rediscover it.

## Mini glossary

| Term | Plain meaning |
|---|---|
| Issue | A tracked question, task, bug, or decision |
| Branch | A safe copy of the code for one change |
| Pull request | A request for teammates to review a change |
| Vertical slice | One small path that works end to end |
| Deterministic rule | A rule that gives the same result for the same inputs |
| Grounded AI | AI whose answer is tied to provided, reviewable sources |

When in doubt, choose the option that is easier for another student to understand, test, and undo.
