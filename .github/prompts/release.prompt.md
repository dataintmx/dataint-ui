---
description: Full release workflow — creates the release/<version> branch from the latest dev, fetches CHANGELOG.md from main, updates CHANGELOG.md/.env.production/package.json using merged PRs from GitHub, commits, pushes, and creates a PR targeting main. Also formats GitHub auto-generated release notes on request.
agent: agent
tools:
  - execute/runInTerminal
  - execute/getTerminalOutput
---

# Release skill

Automate the full release preparation workflow for a `release/<version>` branch.

## Input

The user invokes this skill as `/release <version>` (e.g. `/release 2026.02.03.01`).

The version argument is required. If not provided, ask the user for it before proceeding.

---

## Process

### Step 1 — Create and checkout the release branch from dev

Pull the latest `dev` and create the release branch from it:

```sh
git fetch origin
git checkout origin/dev -b release/<version>
```

This ensures the branch is always based on the most recent state of `dev`.

### Step 2 — Find the previous release tag

```sh
git tag --sort=-version:refname | head -5
```

The previous tag is the most recent semver/calver tag (e.g. `2026.02.03.00`). Store it as `<prev-tag>`. Use it to build the `Full Changelog` comparison URL and to bound the PR query.

### Step 3 — Fetch CHANGELOG.md from main

CHANGELOG.md lives on `main` (not on `dev`, which is the base of release branches). Bring it into the working tree:

```sh
git checkout origin/main -- CHANGELOG.md
```

### Step 4 — Collect merged PRs since the previous tag

Get the date of the commit **immediately before** the previous tag (its first parent, `<prev-tag>^`). This excludes PRs whose merge commit IS the tagged commit — GitHub's boundary handling would otherwise include them.
Use `gh`'s built-in `--jq` flag — do **not** pipe to a separate `jq` binary:

```sh
PREV_TAG_DATE=$(git log -1 --format="%cI" <prev-tag>^)
gh pr list --base dev --state merged \
  --search "merged:>${PREV_TAG_DATE}" \
  --json number,title,author \
  --jq '.[] | "\(.number) \(.author.login) \(.title)"' \
  --limit 100
```

After getting the list, **exclude any PR numbers already present** in the previous CHANGELOG section (`## [<prev-tag>]`) to prevent duplicates.

Use the resulting list to populate the new CHANGELOG entry. Apply the **Classification Rules** below to assign each PR to Added / Changed / Fixed. Strip any `Feat:`, `Fix:`, `Chore:`, `type(scope):` prefix from the displayed title.

### Step 5 — Prepend a new entry to CHANGELOG.md

Insert the new section immediately after the `# Changelog` heading (the blank line above the first `## [...]` entry).

The date is **always today's real-world date** in ISO 8601 format (`YYYY-MM-DD`). It is independent of the version number — do not derive it from the version string.

Format:

```markdown
## [<version>] - <YYYY-MM-DD>

### Added
- <description> by @<author> in #<pr-number>

### Changed
- <description> by @<author> in #<pr-number>

### Fixed
- <description> by @<author> in #<pr-number>

**Full Changelog**: https://github.com/dataintmx/dataint-app/compare/<prev-tag>...<version>
```

Rules:
- Omit sections that have no entries.
- Preserve original description casing after stripping the type prefix.
- The `**Full Changelog**` line goes at the end of the new section, before the previous `## [...]` entry.

### Step 6 — Update `.env.production`

Replace the `APP_VERSION` line:

```
APP_VERSION=<version>
```

### Step 7 — Update `package.json`

Replace the value of the `"version"` field with `"<version>"`.

### Step 8 — Propose commits

Output the following shell commands to the user. Do **not** run them automatically — present them as a block to review and confirm:

```sh
git add CHANGELOG.md
git commit -m "docs(changelog): add release <version> entry"

git add .env.production package.json
git commit -m "chore(release): bump version to <version>"
```

### Step 9 — Push the branch

After the user confirms the commits, push with upstream tracking:

```sh
git push --set-upstream origin release/<version>
```

### Step 10 — Create PR to main

Run the `/pr` skill, directing it to target `main` instead of the default `dev`. The PR should be:

- **Title**: `Release <version>`
- **Base branch**: `main`
- **Body**: standard PR template summarizing the release scope (list the Added / Changed / Fixed entries from the CHANGELOG entry).

Use the gh command:

```sh
gh pr create \
  --base main \
  --title "Release <version>" \
  --body "<generated body>" \
  --assignee @me
```

---

## Classification Rules

Read the **first word(s)** of the PR title (after any `type:` or `type(scope):` prefix) to assign a category. Matching is **case-insensitive**.

| Category | Keywords that trigger it |
|----------|--------------------------|
| **Added** | `feat`, `add`, `implement`, `new`, `introduce`, `create`, `support` |
| **Fixed** | `fix`, `resolve`, `correct`, `patch`, `revert`, `repair` |
| **Changed** | everything else — `update`, `replace`, `refactor`, `use`, `improve`, `migrate`, `rename`, `remove`, `clean`, `adjust`, `standardize`, `limit`, `chore`, `perf` |

When in doubt, prefer **Changed**.

---

## Phase 2 — Format GitHub Release Notes

After the PR is merged and the user creates the GitHub release, GitHub auto-generates release notes. The user will paste them into the chat.

1. If the user has not yet pasted the notes, ask: *"Please paste the release notes generated by GitHub."* — wait for their answer.
2. Parse each `*` line in the `## What's Changed` list from the pasted content.
3. Classify every PR using the **Classification Rules** above — read the PR title words.
4. Strip any `Feat:`, `Fix:`, `Chore:` etc. type prefix from the displayed title.
5. Convert full PR URLs (`https://github.com/.../pull/1521`) to short `#1521` links.
6. Output the final formatted release notes inside a fenced ` ```markdown ` block so the user can copy-paste it directly into the GitHub release description field.

### Output format

```markdown
## What's Changed

### Added
- <description> by @<author> in #<pr-number>

### Changed
- <description> by @<author> in #<pr-number>

### Fixed
- <description> by @<author> in #<pr-number>

**Full Changelog**: https://github.com/dataintmx/dataint-app/compare/<prev-tag>...<version>
```

Rules:
- Omit sections that have no entries.
- Do not include the "New Contributors" block.
- Preserve original description casing after stripping the type prefix.
- Keep the same author handle and PR number from the original line.
