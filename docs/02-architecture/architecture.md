# Opportunity Equity Engine — High-Level Architecture

## 1. System overview

```text
Opportunity Websites / PDFs / APIs
              │
              ▼
      Data Ingestion Pipeline
              │
              ▼
     Parsing + LLM Extraction
              │
              ▼
 Validation + Human Review Queue
              │
              ▼
 PostgreSQL Opportunity Database
      + pgvector Embeddings
              │
              ▼
       Search and Matching API
       ┌──────┴──────┐
       ▼             ▼
 Eligibility     Ranking Engine
 Engine          + Explanations
       └──────┬──────┘
              ▼
       Next.js Web Application
              │
              ▼
        Student Recommendations
```

The system combines large language models with structured data, deterministic eligibility rules, semantic search, and transparent ranking. The LLM interprets unstructured information; application code makes deterministic decisions.

## 2. Main components

### Student web application

Built with Next.js, React, and TypeScript.

Responsibilities:

- Student onboarding and profile editing
- Opportunity search and filtering
- Personalized recommendations
- Match explanations
- Saved opportunities
- Deadline tracking
- Feedback such as “relevant” or “not relevant”

The first version should not require sensitive information such as family income, medical information, immigration documents, or an exact address.

### Backend API

Built with Python and FastAPI.

Responsibilities:

- Authentication and authorization
- Student profile management
- Opportunity search
- Eligibility evaluation
- Ranking and recommendation generation
- Saved opportunities and feedback
- Administrative workflows

Example endpoints:

```text
POST /profiles
GET  /opportunities
POST /recommendations
GET  /opportunities/{id}
POST /opportunities/{id}/save
POST /feedback
```

### Opportunity ingestion pipeline

A scheduled worker collects data from approved sources.

Pipeline stages:

1. Fetch webpages, PDFs, or API data.
2. Store the original source and retrieval timestamp.
3. Extract text using HTML parsing or PDF extraction.
4. Ask an LLM to convert the text into structured JSON.
5. Validate fields and normalize dates, locations, grades, costs, and categories.
6. Send uncertain records to a human review queue.
7. Generate embeddings for semantic search.
8. Publish approved opportunities.

The original source URL, evidence text, extraction version, and verification timestamp should always be retained.

## 3. Core data model

Primary tables:

```text
users
student_profiles
opportunities
opportunity_requirements
opportunity_sources
ingestion_runs
saved_opportunities
recommendation_events
user_feedback
```

An opportunity should contain fields such as:

```text
id
title
organization
description
categories
grades
locations
languages
eligibility_rules
deadline
cost
schedule
application_url
source_url
verification_status
last_verified_at
embedding
```

A student profile should contain only information required for matching:

```text
grade
age_range
city_or_region
interests
preferred_languages
budget
availability
subjects
citizenship_or_residency_category, if necessary
```

## 4. Matching and ranking

### Stage 1: Hard eligibility filtering

Traditional code evaluates deterministic requirements:

- Grade and age requirements
- Location requirements
- Deadline status
- Cost limits
- Required citizenship or residency category

If a hard requirement fails, the opportunity should not be presented as eligible.

### Stage 2: Semantic matching

Embeddings compare a student's interests with opportunity descriptions. For example, “AI and medicine” can match an opportunity described as “biomedical research, machine learning, and health technology.”

### Stage 3: Ranking

An initial transparent score can use the following weights:

```text
Eligibility:       40%
Interest match:    20%
Location:           10%
Cost:               10%
Schedule:           10%
Competitiveness:     5%
Deadline urgency:   5%
```

### Stage 4: Explanation

The LLM generates an evidence-based explanation using only verified database fields:

> Strong match because you are a Grade 11 student in Montreal interested in AI and biomedical research. The program is local and within your budget.

The explanation must not invent requirements, deadlines, costs, or program benefits.

## 5. Search architecture

Use PostgreSQL with `pgvector`. Search should combine:

- Structured filters for grade, location, cost, deadline, and category
- Full-text keyword search
- Vector similarity for interests and descriptions
- The calculated ranking score

This hybrid approach is more reliable than relying only on an LLM or only on keyword search.

## 6. Administrative tools

A small admin dashboard is essential for data quality. Administrators should be able to:

- Review extracted opportunities
- Correct eligibility fields
- Approve or reject records
- Mark sources as outdated
- Identify missing deadlines or application URLs
- Track ingestion failures
- Re-verify opportunities

## 7. Recommended technology stack

```text
Frontend:       Next.js + React + TypeScript
Backend:        Python + FastAPI
Database:       Supabase PostgreSQL
Vector search:  pgvector
AI:             OpenAI API with structured outputs
Storage:        Supabase Storage
Jobs:           Scheduled worker or queue
Deployment:     Vercel + Supabase
Monitoring:     Error tracking, logs, and ingestion metrics
```

## 8. Security and privacy

- Use Supabase Authentication and row-level security.
- Store API keys only on the server.
- Avoid collecting unnecessary sensitive data.
- Encrypt data in transit and at rest.
- Rate-limit public APIs and administrative endpoints.
- Validate all LLM-generated structured data before persistence.
- Show source URLs and verification dates.
- Label recommendations as guidance, not guaranteed eligibility.
- Allow students to delete profiles and saved opportunities.

## 9. End-to-end user flow

```text
Student creates profile
        ↓
Selects grade, location, interests, budget, availability
        ↓
Backend applies hard eligibility rules
        ↓
Search retrieves semantically relevant opportunities
        ↓
Ranking engine calculates match scores
        ↓
LLM creates evidence-based explanations
        ↓
Student views, saves, and prioritizes opportunities
        ↓
Feedback improves future ranking
```

## 10. Operations and observability

Track the following metrics:

- Ingestion success and failure rates
- Number of opportunities awaiting review
- Stale or expired opportunities
- Extraction validation failures
- Search latency
- Recommendation click-through and save rates
- User feedback by category
- LLM cost and error rates

Every recommendation should be traceable to the opportunity version, source evidence, rule results, ranking inputs, and model version used to generate it.

## 11. MVP boundary

Start with:

- Approximately 400 verified opportunities
- One focused geography: Montreal and Quebec
- English and Chinese or French support
- Profile-based recommendations
- Deterministic eligibility checks
- Basic semantic search
- An admin review dashboard

Defer mobile apps, automated application submission, complex recommendation models, extensive personalization, large-scale crawling, and sensitive financial or demographic profiling.

The central architectural principle is:

> LLMs interpret unstructured opportunity information; structured databases and deterministic code evaluate eligibility; ranking algorithms personalize results; the LLM explains the result.
