---
layout: default
title: Learning Prerequisites
---

# Learning Prerequisites and Delivery Roadmap

This document describes what a Grade 11 student should learn to deliver the Opportunity Equity Engine successfully. It is not necessary to master every topic before starting. The recommended approach is **vibe coding**: use AI tools to translate clear product requirements into working code, then inspect, test, debug, and improve that code. The student does not need to memorize a programming language before beginning.

## 1. What “successfully deliver” means

For the first release, success means being able to:

- Collect a small, verifiable set of opportunities.
- Store them in a structured database.
- Accept a simple student profile.
- Apply deterministic eligibility rules.
- Search and rank relevant opportunities.
- Explain recommendations using verified source information.
- Deploy the application so another person can use it.
- Monitor errors, correct bad data, and document limitations.

The target is a reliable MVP, not a production-scale platform used by millions of students.

## 2. Vibe coding changes the prerequisite

Vibe coding means developing through a tight collaboration loop with an AI coding assistant:

```text
Describe a small requirement
          ↓
Ask AI to propose or modify the code
          ↓
Review the files and the data flow
          ↓
Run the app and tests
          ↓
Use the errors and results to guide the next change
```

For this project, the student does **not** need to be an expert in Python, TypeScript, React, or SQL before starting. AI can generate boilerplate, explain unfamiliar syntax, create UI components, write queries, and help debug errors.

However, vibe coding does not remove the need for technical understanding. The student remains responsible for deciding:

- What the product should do.
- Which data should be collected and why.
- Whether an eligibility rule is correct.
- Whether an AI-generated answer is supported by a source.
- Whether code is secure, tested, and maintainable.
- Whether the deployed application actually works.

The most important coding skill is therefore **code literacy**, not language memorization: the ability to read a change, explain its purpose, run it, recognize a bad result, and ask the AI to correct it.

### Vibe coding guardrails

- Ask AI to change one small feature at a time.
- Ask for an explanation of unfamiliar code before accepting it.
- Review the full diff before committing.
- Never paste API keys, passwords, or private student data into an AI tool.
- Run tests after every meaningful change.
- Ask AI to write tests for eligibility and ranking logic.
- Treat generated code and generated opportunity data as untrusted until verified.

## 3. Recommended learning priority

| Priority | Area | Why it matters |
|---|---|---|
| Must learn | AI-assisted development, Git, HTTP, basic SQL, debugging | Required to direct and verify the application build |
| Must learn | How a frontend, backend, database, and API connect | More important than mastering a specific framework |
| Must learn | Relational data modeling and validation | Opportunity and eligibility data must be consistent and searchable |
| Must learn | LLM API usage and structured JSON output | Required for extracting information from webpages and PDFs |
| Must learn | Deployment, environment variables, and logs | A working local demo is not the same as a usable online product |
| Should learn | Embeddings, vector search, evaluation, and prompt design | Improves interest matching and makes the AI component credible |
| Should learn | Authentication, authorization, privacy, and rate limiting | Student data must be protected |
| Later | Queues, advanced MLOps, Kubernetes, model training, microservices | Useful at larger scale but unnecessary for the first MVP |

## 4. Computer and software knowledge

### Essential foundations

The student should understand enough to direct and review AI-generated code:

- Files, folders, paths, processes, and command-line basics.
- How a web browser communicates with a server.
- HTML, CSS, JavaScript, and JSON.
- Variables, functions, conditionals, loops, arrays, objects, and modules at a conceptual level.
- Exceptions, logging, debugging, and reading error messages.
- Basic object-oriented or data-oriented design.
- Git commits, branches, pull requests, merge conflicts, and `.gitignore`.
- How to read API documentation and test an endpoint.

Python is a good choice for the backend and data pipeline, while TypeScript is a good choice for the frontend. Either language can be generated and taught incrementally by an AI assistant. Start with the stack that produces the fastest working prototype; learn enough syntax to read, test, and modify the generated code. Switching languages or frameworks is not a prerequisite for success.

### Web application knowledge

Learn the following concepts:

- Components, props, state, forms, and client/server rendering.
- Routing and page layouts in Next.js.
- REST APIs and HTTP methods: `GET`, `POST`, `PUT`, and `DELETE`.
- Status codes, request validation, pagination, and error responses.
- CORS, cookies, sessions, and authentication basics.
- Responsive design and basic accessibility.
- Loading, empty, and error states in the user interface.

### Database knowledge

The student should be able to:

- Design tables, primary keys, foreign keys, and indexes.
- Write basic SQL queries and joins.
- Understand one-to-many and many-to-many relationships.
- Use migrations rather than manually changing production tables.
- Validate dates, URLs, enumerated values, and required fields.
- Explain why opportunity requirements should be stored as structured fields instead of only as free text.

Recommended starting database: Supabase PostgreSQL.

### Testing and quality

Learn to write and run:

- Unit tests for eligibility rules and scoring calculations.
- API tests for profile and opportunity endpoints.
- A small set of end-to-end browser tests for the main user flow.
- Data validation checks for missing deadlines, broken URLs, and impossible values.
- Manual test cases for English and Chinese or French content.

The matching rules should be testable without calling an LLM.

## 5. AI knowledge

### Essential AI concepts

The student should understand:

- The difference between an LLM, an embedding model, and a traditional program.
- Tokens, context windows, temperature, and model cost at a conceptual level.
- Prompt instructions, examples, constraints, and structured outputs.
- Hallucinations and why generated text cannot automatically be trusted.
- Grounding an answer in retrieved source data.
- Privacy risks when sending user or source data to an AI provider.

### Information extraction

The first useful AI task is converting unstructured source material into structured data.

Example output:

```json
{
  "grades": [10, 11],
  "locations": ["Quebec"],
  "categories": ["STEM", "research"],
  "deadline": "2027-02-01",
  "cost": 0,
  "requirements": ["Canadian secondary-school student"]
}
```

The student must learn to:

- Define a strict JSON schema.
- Validate the model response before saving it.
- Preserve the source text supporting each extracted field.
- Mark uncertain fields for human review.
- Handle missing, conflicting, or ambiguous requirements.
- Avoid treating an LLM's confidence as proof of correctness.

### Matching and ranking

Understand the difference between:

- Hard rules: a Grade 12-only program should not be marked eligible for a Grade 11 student.
- Soft preferences: a student interested in medicine may prefer a biomedical program.
- Ranking: eligible opportunities can still be ordered by relevance, cost, distance, deadline, and schedule.

The initial ranking should be a transparent weighted formula. Do not begin by training a custom recommendation model; there will not be enough reliable user data.

### Embeddings and semantic search

Learn:

- What an embedding represents.
- Cosine similarity at a high level.
- Why vector similarity can find related meaning rather than exact words.
- Why vector search should be combined with structured filters.
- How to evaluate relevant and irrelevant search results.

Use embeddings for interest and description similarity, not for final eligibility decisions.

### AI evaluation

Create a small test set containing:

- Source text.
- Expected structured fields.
- Known eligibility outcomes.
- Expected ranking order or acceptable ranking range.

Track:

- Extraction accuracy.
- Unsupported or invented fields.
- False eligible recommendations.
- False ineligible recommendations.
- Explanation faithfulness.
- Cost and response latency.

False eligible results are more serious than a recommendation that is merely less relevant.

## 6. Cloud and infrastructure knowledge

### Essential deployment concepts

The student should understand:

- The difference between local development and production deployment.
- DNS, domains, HTTPS, and basic CDN concepts.
- Environment variables and secret management.
- Build commands, deployment logs, and rollback concepts.
- Database migrations and backups.
- Server-side versus browser-side code.
- API rate limits and timeouts.

Recommended initial deployment:

```text
Next.js frontend       → Vercel
FastAPI backend         → Render, Railway, or a managed container host
PostgreSQL database     → Supabase
Source-file storage     → Supabase Storage
Scheduled ingestion     → GitHub Actions or a managed scheduler
```

Using managed services keeps the infrastructure manageable for a student team.

### Security basics

Learn to:

- Keep API keys out of Git and browser code.
- Use separate development and production credentials.
- Apply least-privilege database access.
- Validate and sanitize user input.
- Protect administrative endpoints.
- Add rate limiting to expensive AI endpoints.
- Avoid logging private profile data or API keys.
- Keep dependencies updated and review security alerts.

### Operations

Set up:

- Application error logging.
- Health checks for the backend.
- Ingestion success/failure notifications.
- Database backups.
- A way to identify stale opportunity records.
- Basic usage and AI-cost metrics.

The team should be able to answer: “What failed, when did it fail, which users were affected, and how can we recover?”

## 7. Data collection and content knowledge

This project is partly a data-quality project. Technical skills alone are not enough.

The student should learn:

- How to identify authoritative opportunity sources.
- How to respect website terms, robots rules, copyright, and rate limits.
- The difference between a source URL and permission to copy content.
- How to normalize dates, time zones, currencies, grades, and locations.
- How to identify expired, duplicated, or contradictory opportunities.
- How to record when an opportunity was last verified.
- How to design a human review process.

Every published opportunity should have a source URL, verification date, and clear application link.

## 8. Likely knowledge gaps

### Gap 1: Building a complete system

A student may know Python or AI prompting but not how frontend, backend, database, authentication, and deployment fit together.

**Response:** build one vertical slice first:

```text
One form → one API endpoint → one database table → one result page
```

### Gap 2: Data quality

Extracting fields with an LLM is easier than proving that the fields are correct.

**Response:** start with 20–30 manually reviewed opportunities and create validation rules before scaling to hundreds.

### Gap 3: Evaluation

A result that looks convincing is not necessarily correct.

**Response:** create labeled test cases and measure extraction, eligibility, ranking, and explanation quality.

### Gap 4: Security and privacy

Student developers may not recognize that profiles, authentication, API keys, and admin tools create security responsibilities.

**Response:** minimize collected data, use managed authentication, apply row-level security, and ask an experienced adult to review the design.

### Gap 5: Production operations

The first deployment may work but fail after a secret expires, a source changes, or an API quota is reached.

**Response:** document deployment, add logs and health checks, and practice restoring from a backup.

### Gap 6: Product scope

The team may try to cover every opportunity in Canada or build too many features.

**Response:** limit the first release to one region, a few categories, and approximately 400 verified opportunities.

## 9. Technical barriers and notes

### Web scraping is unreliable

Websites change layouts, block automated requests, or publish information only through JavaScript.

**Note:** begin with manually curated sources, public APIs, or permitted data exports. Design ingestion adapters so one source failure does not stop the whole pipeline.

### PDFs and language variation are difficult

PDFs may be scanned, poorly formatted, bilingual, or missing explicit fields.

**Note:** preserve the original document, use OCR only where permitted, and send low-confidence extractions to review.

### Eligibility is often ambiguous

Requirements such as “strong academic record” or “local student” cannot always be reduced to a simple rule.

**Note:** represent requirements as `required`, `preferred`, `unknown`, or `needs_review`. Never silently convert uncertainty into eligibility.

### Deadlines change frequently

Expired recommendations damage trust.

**Note:** show `last_verified_at`, flag old records, and prefer “deadline not confirmed” over an invented date.

### LLM output can be inconsistent

The same source may produce different extraction results, and models can invent plausible details.

**Note:** use schemas, validation, retries, source evidence, model versioning, and human approval for important records.

### AI cost and rate limits can grow quickly

Processing hundreds of long documents repeatedly can become expensive or slow.

**Note:** cache source text and extracted results, process only changed documents, limit input length, and use smaller models for routine extraction.

### Recommendation quality is hard to prove

There may initially be too little user feedback to train or validate personalization.

**Note:** use an explainable scoring formula and a manually labeled evaluation set before attempting machine-learned ranking.

### Bilingual support is more than translation

French, English, and Chinese users may use different terminology and source material.

**Note:** store source language, preserve original text, test search in each supported language, and have a human review important translated content.

## 10. Suggested learn-while-building sequence

### Phase 1: Foundations

- Learn Git and command-line basics.
- Build a small Python or TypeScript program.
- Learn HTTP, JSON, SQL, and relational tables.
- Create a simple frontend form and backend endpoint.

### Phase 2: Vertical slice

- Create one opportunity table.
- Add 10 manually verified records.
- Collect a student profile.
- Implement three deterministic eligibility rules.
- Display matching opportunities.

### Phase 3: AI extraction

- Add one permitted source format.
- Extract structured fields using an LLM schema.
- Compare extraction with human-labeled expected values.
- Add validation and a review status.

### Phase 4: Ranking and search

- Add transparent weighted scoring.
- Add keyword and structured filtering.
- Add embeddings and vector search.
- Test relevance with labeled examples.

### Phase 5: Deployment and operations

- Deploy the frontend, backend, and database.
- Configure production secrets.
- Add authentication and access controls.
- Add logs, health checks, backups, and ingestion alerts.

### Phase 6: Pilot and improve

- Ask a small group of students and educators to test the product.
- Record false matches, missing opportunities, and confusing explanations.
- Improve data and rules before adding new features.

## 11. Suggested team distribution

For a four-person team:

| Role | Primary responsibility | Important skills |
|---|---|---|
| Product and research lead | User interviews, scope, source policy, evaluation criteria | Research, communication, documentation |
| Data and AI lead | Ingestion, extraction schemas, validation, embeddings | Python, APIs, prompt design, data quality |
| Full-stack lead | Frontend, backend API, database integration | React, FastAPI, SQL, testing |
| Platform and community lead | Deployment, monitoring, admin review, user testing | Git, cloud basics, security, project coordination |

Everyone should understand the end-to-end flow well enough to debug a basic issue.

## 12. Delivery checklist

Before calling the MVP complete, confirm that:

- The app works for a new student from start to finish.
- At least 20–30 opportunities have been manually verified.
- Every recommendation has a reason and source link.
- Hard eligibility rules have automated tests.
- Expired or uncertain opportunities are clearly labeled.
- LLM failures do not crash the application or publish invalid data.
- Secrets are not committed to Git.
- Admins can correct or remove an opportunity.
- The deployed app has logs and a health check.
- A user can delete their profile data.
- The team has documented known limitations and future work.

## Final guidance

The strongest learning strategy is to build a narrow, trustworthy product. A Grade 11 student does not need to become an expert in every area or memorize a particular programming language before beginning. With vibe coding, the essential path is:

> Clear requirements → AI-assisted implementation → code literacy and debugging → structured LLM use → deterministic matching → deployment and testing → data quality and evaluation.

The project becomes technically credible when the AI is useful, the rules are inspectable, the sources are verifiable, and the deployed system behaves reliably. The student's job is not to write every line manually; it is to make good technical decisions and verify every important result.
