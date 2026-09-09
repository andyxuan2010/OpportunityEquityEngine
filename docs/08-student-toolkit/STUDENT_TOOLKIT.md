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
