---
layout: default
title: Beginner Project Guide
locale: en
translation_en: /docs/03-student-guides/BEGINNER_PROJECT_GUIDE.md
translation_zh: /docs/03-student-guides/BEGINNER_PROJECT_GUIDE.CN.md
translation_fr: /docs/03-student-guides/BEGINNER_PROJECT_GUIDE.FR.md
---

# Opportunity Equity Engine — Beginner Project Guide

## Welcome

This guide is for a high school student who has never built a website, used an AI API, designed a database, or deployed an application before.

You do not need to know everything before you start. You do not need to be a professional programmer. You do not need to memorize a programming language.

You need a real problem, a willingness to experiment, and a team habit of checking whether your work is correct.

The team will use **vibe coding**: explain a small goal to an AI coding assistant, let it help create the code, run the result, ask questions, and improve it. The AI helps with technical details. The students provide the idea, decisions, creativity, testing, and responsibility.

## 1. What are we building?

Students often miss scholarships, competitions, research programs, volunteering, and summer opportunities because the information is scattered across many websites and documents.

The Opportunity Equity Engine helps a student:

1. Enter a few details such as grade, location, interests, and budget.
2. See opportunities that may fit.
3. Understand why each opportunity was recommended.
4. Open the original source and application link.
5. Save promising opportunities for later.

### Example

```text
Student: Grade 11, Montreal, interested in AI and medicine, budget $300

Result: Biomedical Research Exploration
Match: 91/100
Why: Grade and location match, cost is within budget, and the topic matches the student's interests.
Source: Link to the original opportunity information
```

The system should help students discover possibilities. It should not promise acceptance or replace the official eligibility decision made by an organization.

## 2. The first rule: build a very small version

Do not try to build a complete Canadian opportunity platform on the first day.

The first demo only needs:

- One web page.
- One student profile form.
- Three to ten clearly labeled opportunity records.
- Grade, location, budget, and interest matching.
- A match score and a short explanation.
- A source link.

After that works, add more data and features one at a time.

## 3. What you need to learn

Learn each topic only when the project needs it.

### Computer basics

- How to create, rename, and find files.
- How folders and file paths work.
- How to use a browser and browser developer tools.
- How to open a terminal and run a command.
- How to read an error message.
- How to save work and make a backup.

### Software basics

- What a web page is.
- What a server does.
- What an API is.
- What a database stores.
- What JSON looks like.
- What a test checks.
- What Git saves and why commits are useful.

### AI basics

- What an LLM can and cannot do.
- Why an AI answer may sound correct but be wrong.
- How to ask for structured output.
- How to provide source information to an AI.
- Why important facts must be checked by a person.

### Cloud basics

- The difference between your computer and an online server.
- What a deployment is.
- What a domain name and HTTPS are.
- What an environment variable is.
- Why passwords and API keys must stay secret.

You can use AI to explain all of these topics with examples. Ask for one concept at a time and repeat it in your own words.

## 4. How to use vibe coding safely

### The basic loop

```text
Choose one small task
        ↓
Describe the task and constraints to AI
        ↓
Ask which files will change
        ↓
Review the proposed change
        ↓
Run the app
        ↓
Test a normal case and a failure case
        ↓
Commit the working change
```

### Good prompts

```text
I am a beginner. Explain the goal before changing any files.
Build only this small feature: add a grade input to the profile form.
Tell me which files you will change and how I can test it.
Do not change unrelated files.
```

```text
Explain this error in simple language. Identify the likely file,
the smallest safe fix, and the exact test I should run afterward.
```

```text
Review this change for security problems, incorrect eligibility logic,
missing error handling, and accessibility issues. List problems first.
Do not rewrite the code yet.
```

### Vibe coding rules

- Ask for small changes instead of an entire app in one prompt.
- Do not accept code that nobody on the team can explain at a high level.
- Run the app after each meaningful change.
- Review the Git diff before committing.
- Never paste passwords, API keys, or private student information into an AI assistant.
- Do not let an LLM make final eligibility decisions when a rule can be written in code.
- Treat generated code and generated data as a draft until tested.
- Keep your own design ideas. AI should expand your creativity, not replace it.

## 5. The project path

Follow these phases in order. Each phase has a clear finish line.

### Phase 0 — Form the team and choose the problem

**Tasks**

- Choose three or four students.
- Choose one project coordinator for the first two weeks.
- Decide who the first users are: for example, Montreal Grade 10–12 students.
- Interview at least three students about how they find opportunities.
- Write down the top three problems they describe.
- Choose one problem for the first demo.

**Finish line:** the team can explain who the product helps and what the first demo will do in one minute.

### Phase 1 — Draw the idea before coding

On paper or in Figma, draw:

1. The profile form.
2. The recommendation results page.
3. One opportunity detail card.
4. The path from the form to the results.

Write the fields the student will enter:

```text
Grade
City or region
Interests
Maximum budget
Preferred language
```

Do not collect exact addresses, family income, health information, immigration documents, or other information that is not needed for the demo.

**Finish line:** another student can understand the user journey by looking at the drawing.

### Phase 2 — Set up the workspace

**Tasks**

- Create or use the GitHub repository.
- Install Node.js and a code editor.
- Create a project board with To Do, In Progress, Review, and Done columns.
- Create a `web` application folder.
- Ask the AI assistant to explain the generated folders.
- Run the starter application locally.

A typical Next.js starter command is:

```bash
npx create-next-app@latest web --ts --tailwind --eslint --app --use-npm
cd web
npm run dev
```

If the command behaves differently, check the current [Next.js documentation](https://nextjs.org/docs/app/getting-started) and ask the AI assistant to explain the difference.

**Finish line:** the team can open a page at `http://localhost:3000` and knows how to restart it.

### Phase 3 — Make a page with fake data

Before connecting a database, place three opportunities in a simple local array.

Example:

```ts
const opportunities = [
  {
    title: "Montreal AI Design Challenge (Demo)",
    category: "Competition",
    location: "Montreal",
    minGrade: 9,
    maxGrade: 12,
    cost: 0,
    interests: ["AI", "technology"],
  },
];
```

Build an opportunity card that shows:

- Title.
- Organization.
- Category.
- Location.
- Cost.
- Deadline.
- A reason for the match.

Use “Demo” or “Sample” for fictional opportunities. Never present invented data as a real program.

**Finish line:** the homepage displays opportunity cards with readable design on a phone and desktop.

### Phase 4 — Add the profile form

Add inputs for:

- Grade.
- City or region.
- Interests as comma-separated words.
- Maximum budget.

Start with browser memory. Do not add accounts or save personal profiles yet.

Example profile object:

```json
{
  "grade": 11,
  "location": "Montreal",
  "interests": ["AI", "medicine"],
  "maxBudget": 300
}
```

Validate the form:

- Grade must be a number.
- Budget cannot be negative.
- Location cannot be blank.
- At least one interest should be entered.

**Finish line:** the form accepts a profile and the page can display the submitted values.

### Phase 5 — Add matching rules

Start with rules that are easy to explain:

```text
Eligible if:
  student grade is within the opportunity grade range
  AND location matches or opportunity is online
  AND cost is within the student's budget
```

Then add a soft interest score:

```text
More matching interests → higher score
```

Important distinction:

- **Hard rule:** Grade 11 is outside a Grade 12-only range. Do not mark eligible.
- **Soft preference:** An AI interest is related to a robotics opportunity. Increase the score, but do not treat it as a requirement.

Ask the AI assistant to create a `scoreOpportunity` function and explain it line by line. Test it with:

1. A student who passes every rule.
2. A student with the wrong grade.
3. A student in the wrong location.
4. A student whose budget is too low.
5. A student with no matching interests.

**Finish line:** the same profile always produces the same eligibility and score.

### Phase 6 — Add a database

When the local fake data works, move the opportunities into Supabase PostgreSQL. The database is simply an organized place to store records.

Use the official [Supabase Next.js quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs) for current setup instructions.

Start with one table containing:

```text
title
organization
description
category
min_grade
max_grade
locations
interests
cost
deadline
application_url
source_url
verified_at
published
```

Tasks:

- Create the table.
- Add three sample records.
- Read the records from the Next.js app.
- Replace the local array with the database query.
- Show a friendly error if the database is unavailable.

**Finish line:** the same recommendation page works using database records instead of hard-coded records.

### Phase 7 — Create a small API

An API is a controlled way for the page to ask the application for data.

Create one endpoint:

```text
POST /api/recommendations
```

Input: a student profile.

Output:

```json
{
  "results": [
    {
      "title": "Montreal AI Design Challenge (Demo)",
      "score": 85,
      "eligible": true,
      "reasons": [
        "Your grade is within the program range.",
        "The cost is within your budget."
      ]
    }
  ]
}
```

The API should:

1. Receive the profile.
2. Validate it.
3. Load published opportunities.
4. Apply deterministic rules.
5. Calculate scores.
6. Sort results.
7. Return JSON.

**Finish line:** the browser sends a request to the API and renders the response.

### Phase 8 — Add trustworthy AI features

Do not begin by asking an LLM to invent recommendations. Use the database and rules first.

The first useful AI feature is information extraction:

```text
Source webpage or PDF
          ↓
AI extracts possible fields
          ↓
Code validates the fields
          ↓
Human reviews uncertain records
          ↓
Approved record enters the database
```

The AI may help identify:

- Grade requirements.
- Location.
- Categories.
- Deadline.
- Cost.
- Language.
- Text supporting each field.

The AI should not silently publish uncertain information.

For explanations, use verified fields such as the score, matched interests, grade range, location, and cost. If the AI request fails, show a simple template explanation instead.

**Finish line:** the team can show exactly which facts came from the source and which parts were generated by AI.

### Phase 9 — Improve search and design

Add improvements in this order:

1. Category filter.
2. Location filter.
3. Maximum cost filter.
4. Deadline status.
5. Language filter.
6. Keyword search.
7. Saved opportunities.

Only add embeddings or vector search after keyword and structured search work. An advanced feature is valuable only if it makes results better for real users.

**Finish line:** a student can find, understand, and save useful opportunities without help from the team.

### Phase 10 — Deploy the demo

Deployment means putting the application on the internet.

Before deployment:

- Run the linter.
- Run the production build.
- Test invalid input.
- Test an empty result.
- Test a database error.
- Check mobile layout.
- Confirm no secret is in Git.

For the recommended setup:

```text
Frontend: Vercel
Database: Supabase
Code: GitHub
Documentation: GitHub Pages or Markdown files
```

If the application is inside the `web` folder, set the hosting project root to `web`.

Add deployment environment variables through the hosting dashboard. Do not commit `.env.local`.

**Finish line:** an invited tester can open the deployed URL and complete the main flow.

### Phase 11 — Pilot with real people

Test with 5–15 students and at least one adult reviewer.

Ask:

- Was the purpose clear?
- Did the profile form make sense?
- Were the recommendations relevant?
- Did the explanations help?
- Did any deadline or requirement look wrong?
- What was confusing or missing?
- What would the user change first?

Record observations, not just compliments. A confusing screen or incorrect match is valuable information.

**Finish line:** the team has a prioritized list of problems and fixes the highest-impact issues.

## 6. Weekly team routine

Use a simple routine that works around school schedules.

### Once each week

- Choose the three most important outcomes.
- Assign one owner to each outcome.
- Choose one reviewer.
- Identify anything blocked.
- Demonstrate working progress.
- Write down one lesson learned.

### For each task

Write:

```text
Task: Add a grade input to the profile form.
Owner: Student C
Reviewer: Student D
Done when: The value is validated and appears in the API request.
Test: Enter 11, enter blank, enter text, and check each result.
```

Keep tasks small enough to finish in one to three days.

## 7. Suggested team roles

### Product and user lead

- Talks with students and educators.
- Maintains the problem statement.
- Writes user stories.
- Protects the MVP scope.
- Coordinates pilot feedback.

### Data and AI lead

- Finds authoritative opportunity sources.
- Checks source permissions.
- Maintains opportunity records.
- Designs extraction prompts.
- Reviews AI output.

### App builder

- Builds pages and components.
- Connects the form to the API.
- Implements matching rules.
- Writes tests.
- Reviews generated code.

### Cloud and quality lead

- Manages GitHub workflow.
- Deploys the application.
- Protects environment variables.
- Checks logs and errors.
- Organizes user testing and documentation.

Roles can rotate. Every student should understand the complete flow:

```text
Student form → API → matching rules → database → results page
```

## 8. Rules for data quality and safety

- Use authoritative sources whenever possible.
- Store the source URL for every opportunity.
- Store when the opportunity was last checked.
- Mark uncertain information as “needs review.”
- Never invent a deadline, eligibility requirement, or cost.
- Do not copy more source content than necessary.
- Respect website terms and access limits.
- Collect the minimum student information needed.
- Keep accounts and personal data out of the first demo if possible.
- Use a real adult review for privacy, payment, and minor-safety decisions.

## 9. How to handle common problems

### “The command does not work.”

Copy the exact error. Ask the AI assistant to explain it. Check whether you are in the correct folder. Do not randomly install many packages.

### “The page is blank.”

Open the browser console. Check the terminal. Ask the AI to identify whether the problem is rendering, data loading, or an exception.

### “The database returns no records.”

Check the table name, row policy, environment variables, and whether sample data was inserted.

### “The AI gave a wrong answer.”

Do not hide it. Save the example, identify which fact was wrong, add a validation rule or review step, and test the fix.

### “The team is stuck.”

Reduce the task. Return to the last working commit. Ask a mentor or teammate for a review. A smaller working feature is better than a large uncertain change.

### “We want to add another feature.”

Write it in the later backlog. Ask whether it helps the first user complete the main journey. If not, defer it.

## 10. Beginner glossary

| Term | Simple meaning |
|---|---|
| API | A way for two programs to communicate |
| Backend | The part that handles data and rules behind the screen |
| Database | An organized storage system for information |
| Deployment | Putting an application online |
| Environment variable | A configuration value kept outside the code |
| Frontend | The part of the application the user sees |
| Git | A tool that records code changes |
| LLM | An AI model that works with language and text |
| Prompt | Instructions given to an AI model |
| Schema | The expected shape of data |
| Vector or embedding | A numerical representation used to compare meaning |
| Verification | Checking that an output is correct and supported |

## 11. What not to worry about yet

Do not spend your first weeks learning:

- Every programming language.
- Kubernetes.
- Complex cloud networking.
- Training a large AI model from scratch.
- Microservices.
- Perfect machine-learning personalization.
- A mobile app.
- A huge database.

Use managed services and AI assistance. Learn only enough of each tool to use it safely and explain the result.

## 12. Final checklist

### Product

- [ ] We can explain the problem in one minute.
- [ ] We have one clear target user.
- [ ] The MVP scope is written down.
- [ ] A new student can complete the main flow.

### Technology

- [ ] The app runs locally.
- [ ] The database contains sample records.
- [ ] The API returns recommendations.
- [ ] Eligibility rules are deterministic.
- [ ] Tests or manual test cases exist.
- [ ] The app is deployed.

### AI and data

- [ ] AI-generated fields are validated.
- [ ] Recommendations have source links.
- [ ] Explanations use verified facts.
- [ ] Uncertainty is visible.
- [ ] We can describe where AI is used and where it is not used.

### Team

- [ ] Every task has an owner and reviewer.
- [ ] We use small tasks and frequent commits.
- [ ] We review AI-generated changes.
- [ ] We have tested with people outside the team.
- [ ] We documented known limitations and future work.

## Final encouragement

You are not required to wait until you feel like a developer. Start with a question that matters to you, describe it clearly, and use modern AI tools to help turn it into something real.

Your creativity chooses the problem and the experience. Vibe coding helps you cross technical barriers. Testing, source checking, teamwork, and honest communication make the result trustworthy.

> Build a small version. Learn from every error. Keep your ideas ambitious and your next task manageable.
