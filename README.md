# dataint-ui

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
│  │  ├─ tokens.css
│  │  ├─ base.css
│  │  ├─ components.css
│  │  ├─ overlays.css
│  │  └─ utilities.css
│  └─ index.css
├─ dist/
│  └─ styles.css
├─ playground/
│  └─ index.html
```

- **tokens.css** → `@theme` design tokens (colors, radii, spacing…)
- **base.css** → global resets & typography under `@layer base`
- **components.css** → UI components under `@layer components`
- **utilities.css** → small helpers under `@layer utilities`
- **playground/** → manual visual testing

---

## 🛠️ Development

Build the distributable stylesheet:

```bash
npm run build
```

This generates:

```
dist/styles.css
```

Before publishing, the build runs automatically via:

```
npm run prepublishOnly
```

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

MIT License  
© DataInt
