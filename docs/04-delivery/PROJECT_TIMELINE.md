---
layout: default
title: Project Timeline
---

# Opportunity Equity Engine — Estimated Project Timeline

## Planning assumptions

This timeline assumes:

- A small team of four Grade 11 students.
- Approximately 8–12 hours per student per week.
- Vibe coding with an AI coding assistant.
- Managed services such as Vercel, Supabase, and a hosted AI API.
- A focused MVP for Montreal and Quebec students.
- English plus Chinese or French support.
- Approximately 100–200 verified opportunities for the first public pilot, with 400 as a later target.

The estimated delivery time is **16 weeks**, or approximately one school semester. A smaller private demo can be completed in 8–10 weeks. A reliable public pilot should reserve the full 16 weeks.

## Overall timeline

```text
Weeks  1–2   Discovery, scope, source policy, and technical setup
Weeks  3–4   Vertical slice: profile → database → basic results
Weeks  5–6   Opportunity data model and admin review workflow
Weeks  7–8   AI extraction pipeline and validation
Weeks  9–10  Eligibility engine, ranking, and explanations
Weeks 11–12  Search, bilingual content, and user experience
Weeks 13–14  Deployment, security, testing, and observability
Week  15     Pilot testing and corrections
Week  16     Buffer, documentation, demo, and release
```

## Team roles

| Role | Main responsibility |
|---|---|
| Product and research lead | User interviews, requirements, source quality, scope, evaluation |
| Data and AI lead | Opportunity collection, extraction prompts, validation, embeddings |
| Full-stack lead | Frontend, backend API, database integration, tests |
| Platform and community lead | Deployment, authentication, monitoring, pilot users, documentation |

With vibe coding, roles are ownership areas rather than strict silos. Every important feature should have one owner and one reviewer.

## Detailed 16-week plan

### Weeks 1–2 — Discovery and setup

**Goals**

- Confirm the target user and geography.
- Define the MVP and explicitly list features that will not be built.
- Select 10–20 authoritative opportunity sources.
- Decide which languages the first release supports.
- Create the repository workflow and development environment.

**Work items**

- Interview or survey students and at least one educator or counselor.
- Define the student profile fields.
- Define the opportunity schema and eligibility vocabulary.
- Set up the Next.js frontend, backend API, Supabase project, and environment variables.
- Create a shared issue board and branch/commit conventions.
- Write the first 10 acceptance tests in plain language.

**Milestone:** approved MVP scope, architecture, data schema, source list, and working local repositories.

### Weeks 3–4 — First vertical slice

**Goals**

Build the smallest complete user journey:

```text
Profile form → API request → database query → opportunity results page
```

**Work items**

- Create the student profile form.
- Create the opportunity table and seed 10 manually verified opportunities.
- Implement one backend endpoint.
- Display results with title, category, location, deadline, and source link.
- Add loading, empty, and error states.
- Use AI to generate boilerplate, but review every generated change.

**Milestone:** a student can submit a profile and see real opportunities in a local browser.

### Weeks 5–6 — Data model and review workflow

**Goals**

- Make opportunity records consistent and reviewable.
- Establish the data-quality process before adding AI automation.

**Work items**

- Add source records, verification dates, statuses, and application URLs.
- Add categories, grades, locations, costs, languages, and deadlines.
- Add duplicate detection and expired-record handling.
- Build a basic admin review page or a controlled review table.
- Expand to 30–50 manually verified opportunities.
- Add database migrations and validation tests.

**Milestone:** an administrator can review, correct, approve, and retire an opportunity.

### Weeks 7–8 — AI extraction pipeline

**Goals**

- Convert one permitted webpage or PDF format into structured opportunity data.
- Measure extraction quality before scaling.

**Work items**

- Build one ingestion adapter.
- Store raw source text and retrieval timestamps.
- Create a structured-output extraction prompt and schema.
- Validate dates, URLs, grades, costs, and required fields.
- Preserve evidence text for each important extracted field.
- Add confidence or review flags for ambiguous records.
- Compare AI output with manually labeled examples.

**Milestone:** the system can extract records from one source type and route uncertain results to human review.

### Weeks 9–10 — Eligibility, ranking, and explanations

**Goals**

- Produce trustworthy recommendations rather than generic AI suggestions.

**Work items**

- Implement deterministic hard eligibility rules.
- Add unit tests for passing, failing, missing, and ambiguous requirements.
- Implement the transparent weighted ranking formula.
- Add interest and preference matching.
- Generate explanations grounded in verified database fields.
- Display why a student is or is not a strong match.
- Add a “not enough information” state instead of guessing.

**Milestone:** the system produces ranked recommendations with tested eligibility results and source-backed explanations.

### Weeks 11–12 — Search, bilingual support, and UX

**Goals**

- Make the product easy to explore and useful beyond the demo path.

**Work items**

- Add structured filters for category, grade, location, cost, and deadline.
- Add keyword search.
- Add embeddings and hybrid vector search if the evaluation set supports it.
- Add saved opportunities.
- Add language selection and review translated labels/content.
- Improve mobile layout and accessibility.
- Add clear warnings for expired or unverified information.

**Milestone:** a pilot user can search, filter, compare, save, and understand opportunities in the supported languages.

### Weeks 13–14 — Production readiness

**Goals**

- Make the system safe and stable enough for external pilot users.

**Work items**

- Deploy frontend, backend, database, and scheduled jobs.
- Configure production secrets without committing them to Git.
- Add authentication and database access controls.
- Add rate limits to expensive AI endpoints.
- Add health checks, error logs, and ingestion failure alerts.
- Add backups and document recovery steps.
- Test broken URLs, expired deadlines, malformed source data, API failures, and empty results.
- Run a dependency and secret scan.

**Milestone:** the deployed MVP is observable, access-controlled, and able to recover from common failures.

### Week 15 — Pilot testing

**Goals**

- Find real usability and recommendation problems before release.

**Work items**

- Test with 5–15 students and at least one adult reviewer.
- Record false eligible results, irrelevant matches, missing opportunities, and confusing explanations.
- Measure search latency and common error paths.
- Verify all pilot-visible source URLs and deadlines.
- Prioritize fixes by user impact rather than adding new features.

**Milestone:** pilot feedback is documented and the highest-risk issues are fixed or explicitly accepted.

### Week 16 — Release and presentation

**Goals**

- Finish documentation, stabilize the demo, and communicate limitations honestly.

**Work items**

- Use the reserved buffer for unfinished work or unexpected deployment issues.
- Freeze the MVP feature set.
- Complete the README, architecture, setup, and data-source documentation.
- Prepare a short demo using representative student profiles.
- Record evaluation results and known limitations.
- Tag the release and create a backup of the final database state.

**Milestone:** public or invited pilot release, reproducible demo, and documented next-step plan.

## Parallel workstreams

| Workstream | Weeks | Primary output |
|---|---:|---|
| Product research and scope | 1–4, 15–16 | Requirements, interviews, acceptance tests, pilot findings |
| Data collection and verification | 1–16 | Source list, verified opportunities, review history |
| Frontend and UX | 3–12 | Profile, search, recommendation, save, and language interfaces |
| Backend and database | 2–14 | API, schema, rules, migrations, access controls |
| AI and evaluation | 7–12 | Extraction, embeddings, explanations, labeled test set |
| Deployment and operations | 1–2, 13–16 | Environments, deployment, logs, backups, release |

## Critical path

The following dependencies can delay the entire project:

```text
MVP scope and schema
          ↓
Verified seed data
          ↓
Vertical slice
          ↓
Eligibility and ranking
          ↓
AI extraction and explanations
          ↓
Pilot testing
          ↓
Release
```

Do not wait for automated scraping or advanced vector search before demonstrating the vertical slice. Manual seed data is sufficient to validate the product early.

## Time allocation guidance

For each student, a typical week can be divided as follows:

```text
60% building and testing
20% learning and AI-assisted code review
10% data verification or user research
10% documentation and team review
```

During Weeks 1–2 and Week 15, research and testing may require more time than coding. During Weeks 13–14, deployment and reliability work should take priority over new features.

## Scope control rules

To stay within one semester:

- Start with one geography and a few opportunity categories.
- Start with 10–20 manually verified records before automating ingestion.
- Use a weighted scoring formula before building machine-learned ranking.
- Use managed hosting instead of Kubernetes or custom infrastructure.
- Support one primary language and add a second language only after the core flow works.
- Do not build automated applications, essay writing, chat-only recommendations, or a mobile app in the MVP.
- Keep a “later” backlog so new ideas do not interrupt the critical path.

## Main schedule risks

| Risk | Likely impact | Mitigation |
|---|---|---|
| Scope grows too quickly | High | Freeze MVP scope after Week 2 |
| Source websites block or change scraping | High | Use permitted sources and manual fallback |
| LLM extraction is inaccurate | High | Use schemas, evidence, validation, and human review |
| Deployment takes longer than expected | Medium | Deploy a minimal version by Week 4 |
| Team members have different skill levels | Medium | Pair students, use AI explanations, and assign reviewers |
| School workload reduces available time | High | Reserve Week 16 and prioritize the vertical slice |
| API costs or rate limits are exceeded | Medium | Cache results, limit calls, and set spending alerts |
| Bilingual content is delayed | Medium | Make language labels configurable and prioritize core English content first |

## Definition of done

The MVP is ready when:

- A new student can complete the main flow without team assistance.
- At least 20–30 opportunities are manually verified, with a path to 100–200 for the pilot.
- Every recommendation includes a match score, explanation, source URL, and verification status.
- Hard eligibility rules have automated tests.
- Uncertain or expired records are clearly labeled.
- LLM failures cannot publish invalid records or crash the app.
- Secrets are protected and not present in Git history.
- Admins can correct, approve, and retire opportunity records.
- The deployed app has logs, a health check, and documented recovery steps.
- Pilot feedback and known limitations are recorded.

## Recommended final outcome

The strongest semester outcome is a small, reliable, evidence-based pilot rather than a large unfinished platform. Vibe coding makes implementation faster, but the schedule must still protect time for data verification, testing, user feedback, deployment, and documentation.
