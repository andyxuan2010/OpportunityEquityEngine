# Opportunity Equity Engine

> Helping high school students discover, understand, and prioritize meaningful opportunities.

The Opportunity Equity Engine is a student-centered platform concept for helping high school students find scholarships, competitions, research programs, volunteering, summer programs, and university-preparation opportunities.

The initial focus is Montreal and Quebec students. The platform combines verified information, structured data, deterministic eligibility rules, transparent ranking, and AI-assisted explanations.

## Why this project exists

Opportunity information is scattered across websites, PDFs, school announcements, and application portals. Students may not know:

- What opportunities exist.
- Which ones fit their grade, location, interests, or budget.
- Which deadlines matter.
- Why one opportunity should be prioritized over another.
- Whether the information is current and trustworthy.

The project aims to turn scattered information into a clearer path:

```text
Discover → Understand → Prioritize → Act
```

The goal is not to guarantee admission or replace an official eligibility decision. The goal is to help more students find relevant possibilities and take a confident next step.

## What the first MVP will do

- Collect a small set of verified opportunities.
- Ask for a simple student profile.
- Search and filter by grade, location, category, cost, language, and deadline.
- Apply deterministic eligibility rules.
- Rank relevant opportunities.
- Explain recommendations using verified source information.
- Let students save opportunities and track next steps.
- Give administrators a way to review and correct opportunity data.

The project is currently in the planning and demo-design stage. The recommended first release is a focused MVP rather than a large nationwide platform.

## Repository layout

- `docs/01-initiative/`: purpose, audience, product vision, and bilingual project plans
- `docs/02-architecture/`: end-to-end system architecture
- `docs/00-start-here/`: student orientation, first contribution, and working agreement
- `docs/03-student-guides/`: beginner, prerequisite, vibe-coding, and rapid app/website guidance
- `docs/04-delivery/`: project management, roles, cost, risks, and timeline
- `docs/05-build/`: step-by-step demo implementation
- `docs/06-demo/`: visual deliverables, end-user journeys, and image assets
- `docs/07-research-and-validation/`: student research, consent, source verification, and usability testing
- `docs/08-student-toolkit/`: GitHub collaboration, accessibility, privacy, safety, and troubleshooting
- `docs/09-showcase-and-reflection/`: presentation, portfolio evidence, credits, and learning reflection
- `docs/10-opportunity-sources/`: 600-source opportunity catalog, verification tiers, and data-quality rules
- `docs/INDEX.md`: documentation index and recommended reading paths

## Documentation

| Document | Purpose |
|---|---|
| [Documentation index](docs/INDEX.md) | Topic map and recommended reading paths |
| [Start here](docs/00-start-here/START_HERE.md) | First-hour orientation, roles, working agreement, and definition of done |
| [Initiative](docs/01-initiative/initiative.md) | Purpose, users, problem, ultimate goal, principles, and impact |
| [Architecture](docs/02-architecture/architecture.md) | End-to-end system architecture and technical design |
| [Beginner project guide](docs/03-student-guides/BEGINNER_PROJECT_GUIDE.md) | Zero-to-demo guide for students with no prior experience |
| [Vibe coding for students](docs/03-student-guides/VIBE_CODING_FOR_STUDENTS.md) | How AI-assisted development lowers technical barriers while preserving creativity |
| [Learning prerequisites](docs/03-student-guides/LEARNING_PREREQUISITES.md) | Knowledge to develop, technical gaps, and learning roadmap |
| [Quick app and website build guide](docs/03-student-guides/QUICK_APP_AND_WEBSITE_BUILD_GUIDE.md) | Fast paths for responsive websites, PWAs, iPhone prototypes, and student testing |
| [Demo implementation guide](docs/05-build/DEMO_IMPLEMENTATION_GUIDE.md) | Step-by-step sample implementation with code examples |
| [Project management plan](docs/04-delivery/PROJECT_MANAGEMENT_PLAN.md) | Proposal, tools, cost, roles, risks, and team process |
| [Project timeline](docs/04-delivery/PROJECT_TIMELINE.md) | Estimated 16-week delivery plan and milestones |
| [Demo deliverables](docs/06-demo/DEMO_DELIVERABLES.md) | User journeys, implementation targets, and visual mockups |
| [Research and validation](docs/07-research-and-validation/RESEARCH_AND_VALIDATION.md) | Interviews, source verification, usability testing, and evidence |
| [600-source opportunity catalog](docs/10-opportunity-sources/Opportunity_Equity_Engine_600_Sources.md) | Research sources, verification tiers, ingestion fields, and data-quality rules |
| [Student toolkit](docs/08-student-toolkit/STUDENT_TOOLKIT.md) | Collaboration, accessibility, privacy, responsible AI, and troubleshooting |
| [Showcase and reflection](docs/09-showcase-and-reflection/SHOWCASE_AND_REFLECTION.md) | Presentation, portfolio evidence, credits, and student reflection |
| [English project plan](docs/01-initiative/Opportunity_Equity_Engine.md) | Detailed product and AI project plan |
| [中文项目方案](docs/01-initiative/Opportunity_Equity_Engine.CN.md) | Chinese version of the project plan |

## Product preview

![Opportunity Equity Engine student dashboard](docs/06-demo/demo-assets/01-student-dashboard.png)

See the complete [demo deliverables and visual product journey](docs/06-demo/DEMO_DELIVERABLES.md).

## Recommended technology direction

```text
Frontend:       Next.js + React + TypeScript
Backend:        FastAPI or a simple Next.js API layer for the first demo
Database:       Supabase PostgreSQL
Search:         Structured filters, keyword search, and later pgvector
AI:             Structured extraction and grounded explanations
Deployment:     Vercel + Supabase or equivalent managed services
Collaboration:  GitHub + AI-assisted vibe coding
```

The team does not need to master every language before starting. Vibe coding can help generate boilerplate and explain unfamiliar code. Students remain responsible for product decisions, testing, privacy, data verification, and the final result.

## Delivery approach

1. Start with one target audience and a small user problem.
2. Build one vertical slice: profile → data → match → result.
3. Begin with manually verified sample data.
4. Add deterministic eligibility rules before advanced AI.
5. Add AI extraction and explanations with validation and human review.
6. Test with real students and improve the highest-impact problems.
7. Deploy a small, trustworthy pilot.

## Safety and trust principles

- Do not invent deadlines, requirements, costs, or program benefits.
- Show source URLs and verification dates.
- Treat AI-generated data as untrusted until checked.
- Use code for deterministic eligibility rules.
- Collect only the student information needed for matching.
- Keep secrets out of Git and browser code.
- Clearly label uncertainty and explain that match scores are guidance.

## Live documentation site

Visit the [GitHub Pages site](https://andyxuan.ca/OpportunityEquityEngine/) for the documentation and product vision.

## Repository status

This repository currently contains the initiative, architecture, learning, delivery, implementation, research, opportunity-source catalog, toolkit, timeline, showcase, and demo-design documentation. The next major milestone is implementing the small vertical-slice demo described in [DEMO_IMPLEMENTATION_GUIDE.md](docs/05-build/DEMO_IMPLEMENTATION_GUIDE.md).
