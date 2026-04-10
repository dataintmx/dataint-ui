---
description: Generate atomic git commit commands per changed file using Conventional Commits, with scopes derived from file paths.
agent: agent
tools:
  - execute/runInTerminal
  - execute/getTerminalOutput
---

# Commit skill

Generate one atomic `git commit` command **per changed file** (or per logical group) based on the current working tree diff.

## Process

1. Run `git status` to list modified files
2. Run `git diff <file>` for each relevant file to understand what changed
3. Apply the rules below and output the ready-to-run shell commands

## Rules

- Format: **Conventional Commits** → `type(scope): description`
- `scope` = component or module name derived from the file path
  - `components/features/ui/crime-incidence/toolbar.tsx` → `scope: toolbar`
  - `components/base/simple-select/index.tsx` → `scope: simple-select`
  - `lib/dataint/...` → `scope: dataint`
  - `.github/...` → `scope: ci` or `scope: github`
- Description: imperative mood, lowercase, no period at the end
- Allowed types:

| Type | When to use |
|------|-------------|
| `fix` | Bug fix or UI regression |
| `feat` | New feature or behavior |
| `refactor` | Code change that is neither a fix nor a feature |
| `style` | Formatting, whitespace, classNames only |
| `chore` | Tooling, config, scripts |
| `docs` | Documentation only |
| `test` | Tests only |
| `perf` | Performance improvement |

- **Skip lock files** (`bun.lock`, `package-lock.json`) unless the only change is a dependency bump → `chore(deps): ...`
- If multiple files are inseparable (e.g. a type file + its component), group them into one commit

## Output format

```sh
git add <file>
git commit -m "type(scope): description"
```

One block per file or logical group. No extra commentary — just the commands, ready to copy-paste or run.
