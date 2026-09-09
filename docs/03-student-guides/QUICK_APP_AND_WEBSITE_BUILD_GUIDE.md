---
layout: default
title: Quick App and Website Build Guide
locale: en
translation_en: /docs/03-student-guides/QUICK_APP_AND_WEBSITE_BUILD_GUIDE.md
translation_zh: /docs/03-student-guides/QUICK_APP_AND_WEBSITE_BUILD_GUIDE.CN.md
translation_fr: /docs/03-student-guides/QUICK_APP_AND_WEBSITE_BUILD_GUIDE.FR.md
---

# Opportunity Equity Engine — Quick App and Website Build Guide

This guide shows students how to turn a small idea into a working website, phone-friendly web app, or early iPhone prototype quickly. The goal is not to build every feature at once. The goal is to create one useful path, test it with people, and improve it.

## Choose the smallest useful path

| What you want to make | Fast starting path | What you can demonstrate |
|---|---|---|
| A public website | HTML, CSS, and JavaScript | A polished page with real content and links |
| A phone-friendly app | Responsive website or PWA | An app-like experience in a phone browser |
| An iPhone prototype | SwiftUI in Xcode or Expo | A few screens and a working interaction |
| A data-backed demo | Website plus a simple API or hosted database | Search, filters, saved items, or recommendations |

Start with the path that lets your team test the idea soonest. A responsive website is often the best first version because it works on computers and phones without waiting for an app-store release.

## The fastest website path

For a first version, create three small files:

```text
my-project/
├── index.html
├── style.css
└── app.js
```

Use `index.html` for structure, `style.css` for visual design, and `app.js` for interactions. Ask an AI coding assistant to create one small feature at a time, then open the page in a browser and test it yourself.

Good first features include:

- A search box that filters a list of opportunities.
- A form that collects grade, interests, location, and budget.
- A result card that explains why an opportunity may fit.
- A save button that stores a short list in the browser.
- A clear “apply” link that opens the original source.

You can publish a static website with GitHub Pages or another static hosting service. Add real data only after the screen and user flow make sense with sample data.

## Make it feel like a phone app

Before building a native app, make the website comfortable on a small screen:

1. Use a single-column layout below about 700 pixels wide.
2. Make buttons and form fields easy to tap.
3. Keep important actions near the bottom of the screen.
4. Test with a real phone, not only a resized desktop window.
5. Add a web-app manifest and icon only after the basic experience works.

A phone-friendly website can be shared with a link and added to a phone’s home screen. This is a useful product demo because students can test the experience with classmates immediately.

## Three practical iPhone paths

### SwiftUI and Xcode

Use SwiftUI when the team wants to learn Apple’s native tools and build an iPhone-specific prototype. Design a few screens, use sample data first, and connect real services later. Native iPhone development generally uses Xcode on a Mac, so confirm that the team has access to the required hardware and Apple developer setup.

### Expo and React Native

Use Expo when the team already knows JavaScript or wants one codebase that can grow toward more than one mobile platform. Students can begin with a small screen, a list, and one interaction. Keep the first prototype independent of complex authentication, payments, or background services.

### A progressive web app

Use a responsive website when the priority is speed, access, and easy sharing. A PWA can provide an app-like shell while keeping deployment simple. It is usually the most practical choice for this project’s first student demo.

## A 60-minute build plan

1. **Choose one user:** for example, a Grade 11 student looking for low-cost summer programs.
2. **Choose one action:** search, filter, compare, or save an opportunity.
3. **Sketch three screens:** start, results, and details.
4. **Create sample data:** begin with five believable records and label them as examples.
5. **Build the happy path:** make one complete interaction work before adding options.
6. **Test with two people:** watch where they hesitate and write down their questions.
7. **Fix the biggest issue:** improve clarity before adding another feature.

## A useful AI coding prompt

Give the assistant a narrow request with context, constraints, and a test:

```text
Build a responsive opportunity-search page using plain HTML, CSS, and JavaScript.
Use five sample opportunities in an array. Add filters for grade and cost.
Do not add a framework or a backend. Keep the layout accessible on a phone.
After coding, explain how I can test the filters and what files changed.
```

Then ask for one change at a time: “Add an empty state,” “Explain this function,” or “Make the button keyboard accessible.” Review every change and test it before asking for more.

## Small project examples

- **Opportunity finder:** filter five sample programs and explain each match.
- **Application planner:** turn deadlines into a checklist with status labels.
- **Student resource map:** show resources by location and category.
- **Team showcase:** present the problem, prototype, evidence, and next step.

Each example is enough for a first demo. A convincing small flow is better than a large app with unfinished screens.

## Test before sharing

- Check the page on a narrow phone screen and a wider screen.
- Use the keyboard to reach every control.
- Try an empty search and an invalid form value.
- Confirm links open the intended source.
- Do not place API keys, passwords, or private student information in browser code.
- Label sample records, AI-generated content, and future features honestly.
- Ask a student who did not build the page to complete the main task.

## What students own

AI can suggest code, layouts, test cases, and explanations. Students still own the problem choice, data quality, privacy decisions, visual communication, testing, and the decision about what is ready to show. Build quickly, but keep the project understandable enough that every team member can explain it.

## Recommended path for this project

Start with a responsive static website using sample opportunity data. Add filtering, a clear explanation of each recommendation, and a source link. When that flow works on a phone, decide whether a simple API, hosted database, PWA install prompt, or native iPhone prototype adds enough value to justify the extra complexity.
