# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-03-02

### Added

- **Skeleton component** — CSS component, CVA config, and TypeScript types ([#87](https://github.com/dataintmx/dataint-ui/pull/87))
- **Navbar component** — CSS component, CVA config, and TypeScript types ([#64](https://github.com/dataintmx/dataint-ui/pull/64))
- **Textarea component** — CSS component, CVA config, and TypeScript types ([#57](https://github.com/dataintmx/dataint-ui/pull/57))
- **Soft variant** for Button, Badge, and Alert components ([#60](https://github.com/dataintmx/dataint-ui/pull/60))
- **Hover effect** for Link component (plain and intent variants) ([#62](https://github.com/dataintmx/dataint-ui/pull/62))
- **Vertical gap support** for `card-body` ([#58](https://github.com/dataintmx/dataint-ui/pull/58))
- **New intent variants** for Badge (neutral, accent, info) and Alert/Loading (primary, secondary, accent) ([#68](https://github.com/dataintmx/dataint-ui/pull/68))
- **Neutral, accent, info, success, warning, error variants** for Link component ([#85](https://github.com/dataintmx/dataint-ui/pull/85))
- **Dropdown item variants** for active state and disabled state ([#85](https://github.com/dataintmx/dataint-ui/pull/85))
- **Soft and outline variants** for alerts, badges, buttons, links, and overlays ([#85](https://github.com/dataintmx/dataint-ui/pull/85))
- **Disabled state color tokens** for improved accessibility ([#83](https://github.com/dataintmx/dataint-ui/pull/83))
- **GPL-3.0 license** — repository made public ([#89](https://github.com/dataintmx/dataint-ui/pull/89))

### Changed

- **CVA contract alignment**: component variant and intent props now match the dataint-app CVA contract; `Outline` renamed to `Outlined` across the board ([#68](https://github.com/dataintmx/dataint-ui/pull/68))
- **Refactored CSS architecture**: all component styles now use `@layer components` for improved organization ([#82](https://github.com/dataintmx/dataint-ui/pull/82))
- **Button layout**: changed to `inline-flex` with `gap` for consistent icon spacing ([#81](https://github.com/dataintmx/dataint-ui/pull/81))
- **Outlined button states**: refined hover, focus, and disabled styles for improved accessibility ([#76](https://github.com/dataintmx/dataint-ui/pull/76), [#77](https://github.com/dataintmx/dataint-ui/pull/77))
- **Cursor standardization**: consistent cursor behavior across alert, button, and menu components ([#84](https://github.com/dataintmx/dataint-ui/pull/84))
- **Disabled states**: aligned disabled appearance across all form and interactive components ([#83](https://github.com/dataintmx/dataint-ui/pull/83))
- **Color token rationalization**: improved contrast and consistency across light/dark themes for base, intent, interaction, and disabled tokens ([#75](https://github.com/dataintmx/dataint-ui/pull/75), [#85](https://github.com/dataintmx/dataint-ui/pull/85))
- **Solid variant** is now the default for Badge and Alert (previously `subtle`) ([#60](https://github.com/dataintmx/dataint-ui/pull/60))
- **README**: expanded project structure, updated license section ([#89](https://github.com/dataintmx/dataint-ui/pull/89))

### Fixed

- **Build**: resolved TypeScript path aliases not being rewritten in compiled output — now using `tsc-alias` ([#66](https://github.com/dataintmx/dataint-ui/pull/66))
- **Outlined button focus style**: fixed typo (`outlined` → `outline`) in `focus-visible` selector ([#76](https://github.com/dataintmx/dataint-ui/pull/76))
- **Form and data-display CVA exports**: config objects and types now correctly exported ([#68](https://github.com/dataintmx/dataint-ui/pull/68))

---

## [1.0.0] - 2025-01-01

Initial release.

- Design tokens: colors (primitives + semantic), typography, spacing, sizing, radius, elevation, borders, outline
- Base styles and global resets
- Components: Alert, Badge, Button, Card, Checkbox, Divider, Dropdown, Input, Link, Loading, Menu, Overlay, Radio, Select, Stats, Table, Toggle
- CVA configuration objects and TypeScript types for all components
- Playground for visual testing
