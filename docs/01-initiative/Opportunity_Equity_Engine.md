---
layout: default
title: AI Project Plan
locale: en
translation_en: /docs/01-initiative/Opportunity_Equity_Engine.md
translation_zh: /docs/01-initiative/Opportunity_Equity_Engine.CN.md
translation_fr: /docs/01-initiative/Opportunity_Equity_Engine.FR.md
---

# Opportunity Equity Engine: AI Project Plan for High School Students

## Project Overview

The **Opportunity Equity Engine** is highly suitable for a team of **3–5 Grade 11 students**.

The key constraint is scope. Do not start by trying to cover every scholarship, competition, research program, volunteer opportunity, and summer program in Canada. A much more realistic first version is a narrow but complete MVP, for example:

> **An AI-powered opportunity matching platform for Montreal / Quebec high school students focused on STEM, university preparation, scholarships, research, and volunteering.**

The real value of the project is not simply listing opportunities. It solves a specific problem:

> Many students are capable of succeeding in strong programs, but they do not know which opportunities exist, whether they are eligible, when the deadlines are, or which opportunities are worth prioritizing.

If built properly, this becomes an **AI Opportunity Matching Engine**, not just another activity directory.

---

## Core Product Experience

Suppose a student enters:

- Grade 11
- Montreal
- Interested in medicine / AI
- French + English
- Available weekends
- Budget < $300
- Wants research / volunteering
- GPA / subjects
- Age 16

The system could return:

| Opportunity | Match | Deadline | Why |
|---|---:|---|---|
| Local AI Competition | 94% | Oct 18 | Grade 9–12, AI interest, team eligible |
| Hospital Volunteering | 88% | Rolling | Age requirement met, local |
| Research Summer Program | 82% | Feb 1 | Strong STEM profile |
| Scholarship X | 76% | Mar 15 | Academic eligibility met |
| Program Y | 12% | Jan 30 | Requires Grade 12 |

That is already a complete, testable, demonstrable product.

---

## What the AI Should Actually Do

The project should not be a basic database and should not be a ChatGPT wrapper.

AI should handle the parts that genuinely require language understanding.

### 1. Information Extraction

Opportunity information is often scattered across websites, PDFs, school announcements, and organization pages.

For example:

> Applicants must currently be enrolled in Grade 10 or 11 at a Canadian secondary school and demonstrate an interest in STEM. Applicants must be Canadian citizens or permanent residents.

An AI model can convert this into structured data:

```json
{
  "grades": [10, 11],
  "country": "Canada",
  "field": ["STEM"],
  "citizenship": ["citizen", "permanent_resident"]
}
```

This becomes the first meaningful AI layer of the system.

---

### 2. Eligibility Matching

Student profile:

```text
Grade: 11
Country: Canada
Status: Permanent Resident
Interest: AI / Medicine
```

The system evaluates:

```text
Grade requirement       PASS
Location requirement    PASS
Status requirement      PASS
Interest match          PASS
```

Then returns:

> Eligible — high confidence.

Eligibility should not be delegated entirely to an LLM.

For example:

```python
if student.grade not in opportunity.grades:
    eligible = False
```

Clear deterministic rules should be handled by code.

A more credible architecture is:

> **LLMs interpret unstructured language; traditional code enforces deterministic eligibility logic.**

That is much closer to how a real AI product should be designed.

---

### 3. Opportunity Ranking

Eligibility alone is not enough.

The system should also determine which opportunities deserve the highest priority.

For example:

```text
Match Score =
Eligibility        40%
Interest Match     20%
Location           10%
Cost               10%
Schedule           10%
Competitiveness     5%
Deadline Urgency    5%
```

The output could be:

```text
McGill Research Program
Match Score: 91/100
```

The AI can then explain:

> Strong match because you are a Grade 11 Montreal student interested in biomedical research. The program is local and meets your stated budget constraint.

The system would therefore combine:

- Eligibility
- Ranking
- Personalization
- Explainability

---

## Recommended System Architecture

```text
Opportunity Websites / PDFs
        ↓
Data Collection
        ↓
LLM Information Extraction
        ↓
Structured Database
        ↓
Eligibility Engine
        ↓
Ranking Algorithm
        ↓
LLM Explanation
        ↓
Web App
```

---

## Recommended Technology Stack

### Frontend

- [Next.js](https://nextjs.org/docs)
- [React](https://react.dev/)

### Backend

- [Python](https://docs.python.org/3/)
- [FastAPI](https://fastapi.tiangolo.com/)

### Database

- [PostgreSQL](https://www.postgresql.org/docs/)
- [Supabase](https://supabase.com/docs)

### AI

- [OpenAI API](https://platform.openai.com/docs/)
- [Gemini API](https://ai.google.dev/gemini-api/docs)
- Other LLMs suitable for structured extraction and text understanding

### Semantic Search

- [pgvector](https://github.com/pgvector/pgvector)
- [Embeddings](https://platform.openai.com/docs/guides/embeddings)

### Deployment

- [Vercel](https://vercel.com/docs)
- [Supabase](https://supabase.com/docs)

There is no need to train a large model from scratch for the first version.

For a high school project, the more technically credible approach is:

> **LLM + Structured Data + Deterministic Rules + Ranking Algorithm**

rather than trying to build an LLM from scratch.

---

## Recommended MVP Scope

A reasonable first version could contain:

- 100 scholarships
- 100 competitions
- 75 volunteering opportunities
- 75 summer programs
- 50 research opportunities

Total:

> **Approximately 400 high-quality opportunities**

That is already sufficient for a serious product.

Do not begin by chasing 10,000 or 20,000 entries.

Accuracy, relevance, and verifiability matter more than volume.

---

## Suggested Team Structure for 4 Students

### 1. Product / Research Lead

Responsibilities:

- Research the actual student problem
- Interview students, teachers, and guidance counsellors
- Define product requirements
- Define the data model
- Design user testing

### 2. AI / Data Lead

Responsibilities:

- Python
- LLM APIs
- Embeddings
- Information extraction
- Matching algorithm
- Evaluation

### 3. Full-Stack Developer

Responsibilities:

- React / Next.js
- Backend integration
- Database
- Authentication
- Dashboard

### 4. Data / Community Lead

Responsibilities:

- Collect opportunities
- Verify information
- Contact schools and community organizations
- Run user testing
- Collect feedback
- Track real-world usage

If there is a fifth team member, they can focus on:

- UI / UX
- Visual design
- Outreach
- Presentation
- Competition pitch

---

## How to Make the Project Strong for University Applications

The valuable outcome is not:

> Built an AI website.

The stronger story is:

```text
Built Website
↓
50 Students Tested It
↓
Students Found Opportunities
↓
They Actually Applied
↓
Some Were Accepted
```

For example, the project could eventually report:

- 214 students created profiles
- 1,800 opportunity matches generated
- 67% of users discovered at least one opportunity they had never heard of
- 43 students submitted applications through opportunities discovered on the platform

Those numbers are much stronger than simply saying, “We built an AI app.”

---

## Add a Research Component

This project can also be turned into a formal research study.

For example, recruit 60 students.

### Group A

Uses normal Google search to find opportunities.

### Group B

Uses the Opportunity Equity Engine.

Test:

> How many genuinely eligible opportunities can each student find within 20 minutes?

Example result:

```text
Google Group
Average: 3.2 opportunities

AI Platform
Average: 8.7 opportunities
```

You could also investigate:

> Do students with weaker access to extracurricular information benefit more from AI-based recommendation?

That leads to a legitimate research question:

> **Can AI-driven opportunity recommendation reduce information inequality among high-school students?**

At that point, the project becomes:

> **Research + Social Impact + AI Product**

---

## Major Risks to Avoid

### 1. Do Not Build a ChatGPT Wrapper

If the interface is simply:

> “Tell me your interests and I will recommend some summer programs.”

and the system forwards the prompt directly to an LLM, the project will be weak.

A serious version should include:

- Verified opportunity database
- Structured eligibility
- Matching logic
- Ranking
- Explainability

---

### 2. Do Not Build Only a Searchable Database

If the product only provides:

```text
Search
Filter by Grade
Filter by Location
```

then it is not meaningfully an AI project.

The AI layer should include:

> Automatic opportunity reading → eligibility extraction → student profile matching → ranking → recommendation explanation

---

### 3. Avoid Unnecessary Sensitive Data

The first version should not require:

- Family income
- Health information
- Race
- Immigration documents
- Exact address

A safer student profile could contain only:

```text
Location: Montreal
Grade: 11
Age: 16
Interests: Medicine / AI
Budget: Free / <$500
```

That is enough for an MVP.

---

### 4. Do Not Turn It Into an AI Essay Writer

For example:

> “AI writes your Harvard essay.”

That space is already overcrowded and would weaken the core mission of opportunity equity.

The platform should stay focused on:

> **Opportunity Discovery + Eligibility + Matching**

---

## Project Mission

A strong mission statement could be:

> **Make high-quality extracurricular, academic, and community opportunities discoverable to students who do not already know where to look.**

The core idea is not merely productivity.

It is access to information.

---

## Why This Project Fits High School Students Especially Well

The biggest advantage is:

> **High school students are the target users themselves.**

They do not need to pretend to understand fields such as hospital operations, elderly care, or medical diagnosis.

They already deal with these questions every day:

- Where are the scholarships?
- Where are the research opportunities?
- Which competitions are worth joining?
- Can Grade 11 students apply?
- What are the deadlines?
- Which summer programs are actually worth applying to?
- Why do some students know about research, competitions, and scholarships early while others never hear about them?

That is a real information inequality problem.

---

## Overall Evaluation

| Criterion | Score |
|---|---:|
| Feasibility for high school students | 9/10 |
| AI technical depth | 8/10 |
| Social impact | 9/10 |
| Room for originality | 8/10 |
| Scalability | 10/10 |
| University application value | 9/10 |
| Potential to become a real product | 9/10 |

---

## Final Positioning

The ideal Opportunity Equity Engine should not be described simply as an “AI recommendation website.”

It should be:

> **Opportunity Database + AI Extraction + Eligibility Engine + Personalized Ranking + School / Community Deployment + Measurable Equity Impact**

If a Grade 11 team can reach that level, the project is substantial enough to become a serious high school AI project with clear technical, research, and social-impact value.
