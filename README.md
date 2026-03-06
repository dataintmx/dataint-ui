# dataint-ui

**Version:** 1.1.4 · **License:** GPL-3.0

A lightweight CSS-based design system for DataInt applications.  
This package provides tokens, base styles, components, and utilities built on top of Tailwind CSS v4 using `@theme` and `@layer`.  
It is designed to inject a consistent visual language into DataInt products without shipping React components or running Tailwind inside the library.

---

## 🚀 Installation

```bash
npm install @dataint/ui
```

or

```bash
pnpm add @dataint/ui
```

---

## 📦 Usage

Import the compiled stylesheet inside your application’s global CSS:

```css
@import "@dataint/ui/styles.css";
```

Your project must already have **Tailwind CSS v4** configured.  
This package only provides CSS — no JS, no build-time Tailwind config.

---

## 📁 Project Structure

```
dataint-ui/
├─ src/
│  ├─ css/
│  │  ├─ base.css
│  │  ├─ tokens/
│  │  │  ├─ colors.primitives.css
│  │  │  ├─ colors.semantic.css
│  │  │  ├─ borders.css
│  │  │  ├─ elevation.css
│  │  │  ├─ outline.css
│  │  │  ├─ radius.css
│  │  │  ├─ sizes.css
│  │  │  ├─ spacing.css
│  │  │  └─ typography.css
│  │  └─ components/
│  │     ├─ alert.css
│  │     ├─ badge.css
│  │     ├─ btn.css
│  │     ├─ card.css
│  │     ├─ checkbox.css
│  │     ├─ divider.css
│  │     ├─ dropdown.css
│  │     ├─ input.css
│  │     ├─ link.css
│  │     ├─ loading.css
│  │     ├─ menu.css
│  │     ├─ navbar.css
│  │     ├─ overlay.css
│  │     ├─ radio.css
│  │     ├─ select.css
│  │     ├─ progress.css
│  │     ├─ skeleton.css
│  │     ├─ stats.css
│  │     ├─ table.css
│  │     ├─ textarea.css
│  │     └─ toggle.css
│  ├─ cva/          ← class-variance-authority config objects
│  ├─ types/        ← TypeScript type definitions
│  └─ index.css
├─ dist/
│  ├─ styles.css
│  ├─ index.js / index.d.ts
│  └─ cva/
├─ playground/
│  └─ index.html
```

- **tokens/colors.primitives.css** → primitive scales (raw palettes)
- **tokens/colors.semantic.css** → semantic/system tokens (base, intents, interaction states)
- **base.css** → global resets & typography under `@layer base`
- **components/** → component styles under `@layer components`
- **playground/** → manual visual testing

---

## 🎨 Color Token Strategy

- Use **base/structural tokens** (`--color-base-*`, border and outline tokens) for layout hierarchy and neutral surfaces.
- Use **semantic intent tokens** (`--color-primary|success|warning|error|...`) only when a component expresses semantic meaning.
- Use semantic **interaction tokens** (`--color-*-hover`, `--color-*-soft`, `--color-*-outline-border`) for consistent hover/soft/outlined behavior across components.
- Avoid introducing one-off component color formulas when an equivalent semantic token already exists.

---

## 🛠️ Development

Build the distributable:

```bash
npm run build
```

This generates:

```
dist/styles.css        ← compiled stylesheet
dist/index.js          ← JS entry point
dist/cva/              ← CVA variant helpers
```

The build runs automatically in two scenarios:

- **`prepare`** — triggered when installing the package directly from Git (e.g. `bun add git@github.com:dataintmx/dataint-ui.git`)
- **`prepublishOnly`** — triggered before `npm publish`

---

## 👀 Playground

For quick visual testing of styles:

```bash
npm run dev:playground
```

or open manually:

```
playground/index.html
```

---

## 📜 License

GNU General Public License v3.0  
© 2026 DataInt  
See [LICENSE](./LICENSE) for details.

---

## 📋 Changelog

### 1.1.1 — 2026-03-02

- **fix:** add `prepare` script so the package builds automatically when installed from Git, resolving `TS2307` module resolution errors in consuming apps ([#91](https://github.com/dataintmx/dataint-ui/issues/91))
- **fix:** move `@tailwindcss/cli` from `dependencies` to `devDependencies` — it is only needed for the playground build and should not be installed as a transitive runtime dependency

### 1.1.0

- Initial public release with tokens, base styles, components, CVA variant helpers, and TypeScript type definitions
