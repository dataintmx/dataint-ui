---
description: Create a GitHub Pull Request from the current branch, update the related issue status and body.
agent: agent
tools:
  - execute/runInTerminal
  - execute/getTerminalOutput
---

# PR skill

Create a GitHub Pull Request from the current branch to a target branch, then update the related GitHub issue.

## Process

1. Run `git branch --show-current` to get the current branch name
2. Extract the issue number from the branch name (e.g. `fix/1510-...` → `1510`)
3. Ask the user: *"Which branch should this PR target? (default: `dev`)"* — if no answer, use `dev`
4. Run `git log origin/dev..HEAD --oneline` to list commits in this branch
5. Run `git diff origin/dev...HEAD --stat` to list changed files
6. Run `git diff origin/dev...HEAD` to understand what changed in detail
7. Run `gh issue view <issue-number> --json title,body,labels` to read the current issue
8. Generate the PR title and body following the rules below
9. Run `gh pr create --base <target-branch> --title "<title>" --body "<body>" --assignee @me --label "Status: Waiting for Approval" --reviewer pablorm296`
10. Run the issue update commands

---

## Rules

### PR Title
- Derive it from the branch name — strip the `type/NNNN-` prefix, replace hyphens with spaces, capitalize first word
- If the branch name ends in a parenthetical group (e.g. `...-State-and-Municipality-Views`), wrap it in parentheses in the title
- Example: `fix/1510-State-and-Municipality-Selector-UI-in-Crime-Incidence-State-and-Municipality-Views`
  → `Fix State and Municipality Selector UI in Crime Incidence (State and Municipality Views)`

### PR Body
Fill every section using the commit log and diff as context:

- **Description**: 2–4 sentences explaining *what* changed and *why*. Focus on impact, not implementation details.
- **Related Issues**: use `Closes #<issue-number>` — this auto-links the PR to the issue in the Development section on GitHub.
- **Checklist**: mark **all** items as `[x]` — the PR is sent when the work is done.
- **Additional Information**: files affected, migration notes, design system changes, caveats. If nothing notable, write `N/A`.

The body passed to `gh pr create` must follow this structure:

```
## Description
<generated content>

## Related Issues
Closes #<issue-number>

## Checklist
- [x] I have tested my changes thoroughly and they do not introduce new issues.
- [x] My code follows our coding style and conventions.
- [x] I have added appropriate documentation or updated existing documentation to reflect the changes.
- [x] All new and existing tests have passed successfully.
- [x] I have added necessary comments to my code for clarity, especially in complex sections.
- [x] I have considered and addressed potential edge cases or error scenarios.
- [x] The code is ready for review and can be merged into the main or dev branch.

## Additional Information
<generated content>
```

---

### Issue body update
Rewrite the issue body using the template below. Fill each section using the existing issue content plus the diff context. Mark **all** task and acceptance criteria checkboxes as `[x]` (they are done).

```markdown
## Context
<background or motivation — from the existing issue or inferred from the diff>

## Problem Description
<clear explanation of what was wrong>

## Solution
<what was implemented to fix it>

## Tasks
- [x] <task 1>
- [x] <task 2>
...

## Acceptance Criteria
- [x] <criterion 1>
- [x] <criterion 2>
...
```

### Issue label update
- Remove label `Status: In Progress` (if present)
- Add label `Status: Waiting for Approval`

```sh
gh issue edit <issue-number> --remove-label "Status: In Progress" --add-label "Status: Waiting for Approval"
gh issue edit <issue-number> --body "<generated issue body>"
```

---

## Output format

After all commands have run, confirm with a brief summary:

### ✅ Done
- PR created: `<pr-url>`
- Issue #`<issue-number>` updated: body rewritten, label changed to `Status: Waiting for Approval`
