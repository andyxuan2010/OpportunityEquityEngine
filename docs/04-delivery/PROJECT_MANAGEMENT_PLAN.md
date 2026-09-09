---
layout: default
title: Project Management Plan
locale: en
translation_en: /docs/04-delivery/PROJECT_MANAGEMENT_PLAN.md
translation_zh: /docs/04-delivery/PROJECT_MANAGEMENT_PLAN.CN.md
translation_fr: /docs/04-delivery/PROJECT_MANAGEMENT_PLAN.FR.md
---

# Opportunity Equity Engine — Project Management Plan

## 1. Executive proposal

The Opportunity Equity Engine should be managed as a focused, evidence-based MVP for high school students in Montreal and Quebec. Its purpose is to help students discover opportunities, understand eligibility, and prioritize programs such as STEM activities, research, volunteering, scholarships, and university preparation.

The team should optimize for **trust, learning, and a working pilot**, not for the largest number of features. Vibe coding and AI-assisted development can dramatically reduce the amount of code students need to write manually, but the team must still own the product decisions, data quality, testing, privacy, and final verification.

### Proposed MVP

- A web application accessible on desktop and mobile.
- A simple student profile: grade, region, interests, language, budget, and availability.
- A curated database of 100–200 verified opportunities for the first pilot.
- Search and filters for category, grade, location, cost, language, and deadline.
- Deterministic eligibility checks.
- Transparent match scoring.
- AI-generated explanations grounded in verified source fields.
- Saved opportunities and basic feedback.
- An admin review workflow for correcting or retiring records.

### Out of scope for the first release

- Automated application submission.
- AI essay writing.
- A mobile application.
- Coverage of every Canadian opportunity.
- Custom model training.
- Complex machine-learned recommendations.
- Collection of sensitive financial, medical, immigration, or exact-address data.

## 2. Project objectives and success measures

### Objectives

1. Help students find opportunities they would not easily discover themselves.
2. Make eligibility reasoning visible and understandable.
3. Preserve source evidence and verification dates.
4. Give students a real deployed product to test.
5. Teach the team product design, AI use, data quality, software delivery, and teamwork.

### Success measures

| Measure | Initial target |
|---|---:|
| Manually verified opportunities | 100–200 for pilot; 20–30 before automation |
| Pilot students | 5–15 |
| Adult reviewers | At least 1 educator, counselor, or knowledgeable mentor |
| Recommendations with source links | 100% |
| Hard eligibility rules with tests | 100% of implemented rules |
| Unverified or expired records clearly labeled | 100% |
| Main user flow completion | A new user can complete it without team assistance |
| Deployment recovery documentation | Available before pilot |

## 3. Delivery model for high school students

### Recommended team size

Four students is ideal. Three students can deliver the MVP by reducing scope. Five students can add stronger research, content review, or user testing, but only if ownership is clear.

### Time commitment

Plan for:

- 8–12 hours per student per week.
- 16 weeks for a reliable public or invited pilot.
- Approximately 512–768 total student-hours for a four-person team.

An 8–10 week demo is possible, but it should use manual data, one language, fewer features, and no complex ingestion automation.

### Vibe coding workflow

The team should use AI coding assistants to:

- Scaffold application pages and API endpoints.
- Explain unfamiliar code and errors.
- Generate database migrations and test cases.
- Refactor repetitive code.
- Suggest UI improvements.
- Draft documentation.

Every AI-assisted change should follow this loop:

```text
Small requirement → AI proposal → human review → run and test
        ↑                                      ↓
        └──────────── feedback and correction ─┘
```

Vibe coding removes syntax and boilerplate as major barriers. It does not remove the need to understand the data flow, check security, test rules, and verify opportunity information.

## 4. Team roles and responsibilities

Each role has a primary owner and a backup reviewer. Students should rotate responsibilities when possible so that no one becomes the only person who understands a critical system.

### Role 1 — Product and research lead

**Owns:** user problem, scope, requirements, and evaluation.

Responsibilities:

- Interview students, educators, or counselors.
- Write user stories and acceptance criteria.
- Maintain the MVP and “later” backlogs.
- Define what makes a recommendation useful.
- Coordinate pilot testing and feedback.
- Ensure the team is solving a real problem rather than adding random features.

Skills to develop:

- Research and interviewing.
- Product thinking.
- Writing clear requirements.
- Presentation and communication.
- Basic usability testing.

### Role 2 — Data and AI lead

**Owns:** opportunity data, extraction, validation, and matching quality.

Responsibilities:

- Identify permitted and authoritative sources.
- Define the opportunity schema.
- Build or coordinate the ingestion workflow.
- Create structured-output prompts.
- Preserve source evidence and retrieval dates.
- Review extraction errors and ambiguous requirements.
- Maintain test cases for extraction and recommendation quality.

Skills to develop:

- Python or AI-assisted scripting.
- JSON and schemas.
- Prompt design.
- Embeddings and semantic search.
- Data cleaning and evaluation.

### Role 3 — Full-stack lead

**Owns:** user interface, backend API, database integration, and automated tests.

Responsibilities:

- Build the profile, search, results, and saved-opportunity experiences.
- Implement API endpoints and validation.
- Implement deterministic eligibility rules.
- Maintain database migrations.
- Write unit, API, and end-to-end tests.
- Review AI-generated code for correctness and maintainability.

Skills to develop:

- React/Next.js concepts.
- HTTP and REST APIs.
- SQL and relational data modeling.
- Debugging and testing.
- Accessibility and responsive design.

### Role 4 — Platform and community lead

**Owns:** deployment, security, operations, documentation, and pilot coordination.

Responsibilities:

- Manage development and production environments.
- Configure secrets and access control.
- Set up logs, health checks, and alerts.
- Maintain deployment and recovery instructions.
- Coordinate user onboarding and feedback collection.
- Track project risks, decisions, and release readiness.

Skills to develop:

- Git and GitHub workflows.
- Managed cloud services.
- Environment variables and security basics.
- Monitoring and incident response.
- Team coordination and documentation.

### Shared responsibilities

All students should:

- Attend weekly planning and review meetings.
- Review important pull requests.
- Test features from a user’s perspective.
- Protect secrets and personal data.
- Understand the end-to-end architecture.
- Document decisions and known limitations.

## 5. Project phases and timeline

| Phase | Weeks | Main output | Release gate |
|---|---:|---|---|
| Discovery and setup | 1–2 | Scope, schema, source policy, tools | Team agrees on what will not be built |
| Vertical slice | 3–4 | Profile → database → results | One user can complete the basic flow |
| Data and admin workflow | 5–6 | Reviewable opportunity records | Admin can approve and correct data |
| AI extraction | 7–8 | Structured extraction from one source type | Extraction is measured and reviewable |
| Matching and ranking | 9–10 | Eligibility, scores, explanations | Rules are tested and explanations are grounded |
| Search and experience | 11–12 | Filters, saves, language support | Pilot user can find and understand opportunities |
| Production readiness | 13–14 | Deployment, security, monitoring | Common failures are handled and logged |
| Pilot and release | 15–16 | Feedback, fixes, documentation, demo | MVP definition of done is satisfied |

Do not make automated scraping or advanced AI a dependency for the first working demo. Ten manually verified records are enough to validate the user experience.

## 6. Project management process

### Weekly rhythm

| Meeting or activity | Frequency | Duration | Purpose |
|---|---:|---:|---|
| Planning | Weekly | 30 minutes | Select the next small set of outcomes |
| Async status update | 2–3 times weekly | 5 minutes | Report done, next, and blocked work |
| Code/data review | Weekly | 30–45 minutes | Review changes, tests, and source quality |
| Demo and retrospective | Weekly or biweekly | 30 minutes | Show progress and improve the process |
| Mentor or adult review | Every 2–4 weeks | 30–60 minutes | Review privacy, scope, and technical risks |

### Work item rules

Every task should have:

- One owner.
- A clear outcome.
- A reviewer.
- Acceptance criteria.
- A reasonable size: ideally one to three days of work.
- A test or demonstration method.

Use labels such as `frontend`, `backend`, `data`, `ai`, `infra`, `research`, `bug`, and `blocked`.

### Definition of a completed task

A task is complete only when:

- The feature or data change is implemented.
- The relevant test or manual check passes.
- The change has been reviewed by another teammate.
- Documentation is updated if behavior or setup changed.
- The change is committed with a clear message.

## 7. Recommended tools

### Core collaboration tools

| Need | Recommended tool | Why |
|---|---|---|
| Source control and code review | GitHub | Repository, issues, pull requests, and history |
| Task management | GitHub Projects | Keeps tasks close to the code |
| Team communication | Discord, Slack, or school-approved chat | Quick coordination and async updates |
| Design and wireframes | Figma | Fast interface exploration before coding |
| Documentation | Markdown in the repository | Versioned decisions and reproducible setup |
| AI-assisted development | An approved coding assistant | Vibe coding, explanations, tests, and debugging |

### Development and testing tools

| Need | Recommended tool |
|---|---|
| Frontend | Next.js, React, TypeScript |
| Backend | FastAPI and Python, or an equivalent managed API approach |
| Database and authentication | Supabase PostgreSQL |
| API testing | Postman, Insomnia, or browser developer tools |
| Browser testing | Playwright or a small manual test script |
| Code quality | Formatter, linter, type checker, and dependency scanner |
| Deployment | Vercel for frontend; managed backend hosting for API/workers |
| Scheduled jobs | GitHub Actions or a managed scheduler |
| Monitoring | Hosting logs plus a lightweight error-tracking service |

Use the simplest tool that the team can understand and maintain. Avoid adding a service merely because it is popular.

## 8. Knowledge required

### Technical knowledge

Students should learn enough to:

- Describe how frontend, API, database, and AI services connect.
- Read and debug AI-generated code.
- Understand HTTP, JSON, SQL, and environment variables.
- Model opportunities and requirements as structured data.
- Write tests for eligibility and ranking.
- Deploy and inspect logs.

They do not need to memorize a programming language before starting. Vibe coding can generate much of the implementation, but students must be able to review behavior and recognize incorrect results.

### AI knowledge

Learn:

- LLMs, embeddings, structured outputs, and prompt design.
- Hallucinations and source grounding.
- Cost, rate limits, caching, and privacy.
- The difference between deterministic eligibility rules and soft relevance signals.
- How to create a labeled evaluation set.

### Product and research knowledge

Learn:

- User interviews without leading the participant.
- How to prioritize a problem and define an MVP.
- How to write acceptance criteria.
- How to distinguish a user request from a product requirement.
- How to measure whether recommendations are useful.

### Data and ethics knowledge

Learn:

- Source verification and update frequency.
- Copyright, website terms, and permitted collection.
- Data minimization and student privacy.
- Bias and unequal access in recommendation systems.
- How to communicate uncertainty and limitations.

## 9. Cost plan

All estimates below are in USD and are planning ranges, not guarantees. Prices and usage limits can change, so the team should check provider pricing before enabling paid services.

### Free-first student demo

| Item | Estimated monthly cost | Notes |
|---|---:|---|
| GitHub repository and public Actions | $0 | Public repositories do not incur billable GitHub-hosted runner minutes under the cited GitHub documentation |
| Vercel Hobby | $0 | Suitable for a personal or non-commercial prototype |
| Supabase Free | $0 | Includes a small PostgreSQL project; inactive free projects may pause |
| AI API usage | $0–$10 | Use manually during development or a small usage budget |
| Domain | $0–$20/year | Optional; use the default hosting URL initially |
| **Estimated total** | **$0–$10/month plus optional domain** | Best starting point |

### Small pilot

| Item | Estimated monthly cost | Notes |
|---|---:|---|
| Vercel | $0–$20 | Hobby may be enough; Pro is listed at $20/month if team features or higher limits are needed |
| Supabase | $0–$25+ | Free may be sufficient; Pro is listed from $25/month and adds production-oriented capabilities |
| Backend or worker hosting | $0–$25 | Use a free tier where available, or one small managed service |
| AI API usage | $5–$30 | Depends on document length, model, extraction frequency, and caching |
| Domain and email | $0–$30 | Optional and dependent on provider |
| **Estimated total** | **$5–$100/month** | Set a hard budget before inviting external users |

### More reliable public pilot

Budget approximately **$50–$200/month** if the project needs paid hosting, non-pausing database service, backups, higher limits, regular ingestion, and more AI usage. The project should not move to this tier until the team has pilot evidence that users benefit from it.

### Cost-control rules

- Begin with free tiers and manually curated data.
- Set provider spending limits and alerts before using paid APIs.
- Cache extracted documents and AI results.
- Process only new or changed source documents.
- Use smaller models for routine extraction and reserve stronger models for difficult cases.
- Never put an AI API key in frontend code.
- Have one adult account owner for paid services.
- Review usage once per week during ingestion development.
- Keep a local or exportable copy of important opportunity data.

### Official pricing references

- [Vercel pricing](https://vercel.com/pricing) — Hobby is listed at $0/month and Pro at $20/month.
- [Supabase pricing](https://supabase.com/pricing) — Free is listed at $0/month and Pro from $25/month.
- [OpenAI API pricing](https://developers.openai.com/api/docs/pricing) — API usage is priced by model and token usage.
- [GitHub Actions billing documentation](https://docs.github.com/en/actions/how-tos/monitor-workflows/view-job-execution-time) — public repositories do not have billable minutes for GitHub-hosted runners under the documented conditions.

## 10. Major risks and mitigations

| Risk | Impact | Mitigation | Owner |
|---|---|---|---|
| Scope becomes too large | High | Freeze MVP after Week 2; maintain a later backlog | Product lead |
| Incorrect eligibility | Very high | Deterministic rules, evidence fields, tests, human review | Data/AI lead |
| Stale deadlines | High | Verification dates, expiry flags, scheduled review | Data/AI lead |
| Scraping breaks | High | Use permitted sources, adapters, and manual fallback | Data/AI lead |
| AI costs grow unexpectedly | Medium | Cache, rate limits, budget alerts, small models | Platform lead |
| Secrets leak | Very high | Environment variables, secret scanning, adult review | Platform lead |
| Students have unequal technical experience | Medium | Pair programming, AI explanations, shared ownership | All leads |
| Team loses time to deployment | High | Deploy a minimal vertical slice by Week 4 | Platform lead |
| School workload interrupts the schedule | High | Small tasks, weekly priorities, Week 16 buffer | Product lead |
| Users misunderstand recommendations | High | Show sources, uncertainty, and “not confirmed” states | Product lead |

## 11. Decisions that need an adult or mentor review

Before the pilot, ask an adult with technical, school, legal, or privacy experience to review:

- What student information is collected.
- Authentication and deletion of accounts.
- Whether source collection respects terms and copyright.
- The wording of eligibility and uncertainty messages.
- AI provider data handling and account ownership.
- Spending limits and payment methods.
- Whether the product is ready for minors to use.

Students can lead the project while still asking for adult review on decisions that involve safety, privacy, money, or legal responsibility.

## 12. Final delivery checklist

### Product

- The target user and MVP scope are documented.
- The main flow works on a phone and desktop.
- Users can search, filter, understand, and save opportunities.

### Data and AI

- Opportunities have source URLs and verification dates.
- Eligibility rules are explicit and tested.
- AI extraction is validated before publication.
- Explanations are grounded in stored evidence.
- Uncertainty is shown instead of hidden.

### Engineering

- Code is in Git with reviewed commits.
- Secrets are not stored in the repository.
- Errors, empty states, and API failures are handled.
- The deployed app has logs and a health check.
- Backups and recovery steps are documented.

### Team and learning

- Each major component has an owner and backup reviewer.
- Every student can explain the end-to-end architecture.
- AI-generated code was reviewed rather than blindly accepted.
- Pilot feedback and known limitations are recorded.

## Final recommendation

Treat the project as a student-led product studio. Start with a small problem, use vibe coding to move quickly, and protect time for research, data verification, testing, and user feedback. A trustworthy pilot used by a few real students is a stronger outcome than a large feature list that nobody can verify or maintain.
