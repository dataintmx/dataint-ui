---
description: Create one GitHub issue per problem described by the user, using a structured 5-section template.
agent: agent
tools:
  - runCommands
---

# Issue skill

Create one GitHub issue per problem or feature described by the user. If multiple problems are provided, create one issue per item.

## Process

1. Read the user's input — it may be a single problem or a list
2. For each item, generate a title and body following the rules below
3. Infer a **priority** label from the content: `Priority: Low` (minor/cosmetic), `Priority: Medium` (functional impact, workaround exists), `Priority: High` (blocking or critical)
4. Infer a **type** label from the content: `Type: Bug` (something broken), `Type: Enhancement` (new feature or improvement), `Type: Documentation` (docs only)
5. Run `gh issue create --title "<title>" --body "<body>" --label "Status: Unresolved" --label "<priority-label>" --label "<type-label>"` for each issue — capture the returned issue number and URL
6. Ask the user: *"Which base branch for the new branch? (default: `dev`)"* — if no answer, use `dev`
7. Derive the branch name from the issue using the format: `type/NNNN-Title-in-kebab-case`
   - `type` is inferred from the issue content: `fix`, `feat`, `refactor`, `chore`, `docs`
   - `NNNN` is the issue number returned by step 3
   - `Title-in-kebab-case` is the issue title with spaces replaced by hyphens, special chars removed, **first word capitalized**, rest lowercase, max ~60 chars
   - Example: issue #1511 "Fix: broken selector in toolbar" → `fix/1511-Broken-selector-in-toolbar`
8. Run `gh issue develop <issue-number> -c -b <base-branch> -n <branch-name>` for each issue
9. Run `git fetch && git checkout <branch-name>` to switch to the new branch
10. Report results

---

## Rules

### Title
- Concise, descriptive, professional
- Format: `<Type>: <short description>` — e.g. `Fix: broken selector in Crime Incidence toolbar`
- No issue number in the title (GitHub assigns it)

### Body
Generate the following 5 sections as H2 headers. Use clear, actionable language.

```markdown
## Context
<Background or motivation. Why does this matter? What is the affected area?>

## Problem Description
<Clear explanation of what is wrong or missing. Be specific.>

## Solution
<Proposed approach or fix. What needs to be done and how?>

## Tasks
- [ ] <Actionable step 1>
- [ ] <Actionable step 2>
- [ ] <Add as many as needed>

## Acceptance Criteria
- [ ] <Verifiable requirement 1>
- [ ] <Verifiable requirement 2>
- [ ] <Add as many as needed>
```

### Notes
- If the user's input is vague, ask one targeted follow-up question before generating
- If the input already contains enough detail, proceed directly without asking
- Use plain language — avoid jargon unless it is domain-specific and necessary
- All tasks and acceptance criteria must be actionable and independently verifiable

---

## Output format

After all issues and branches are created, confirm with:

### ✅ Issues created
| # | Title | Branch | URL |
|---|-------|--------|-----|
| <number> | <title> | <branch-name> | <url> |
