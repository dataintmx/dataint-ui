## [1.0.0] - 2026/01/20

### Added

- Initial stable release of `@dataint/ui` with a complete baseline design system implementation.
- Design tokens foundation (primitives + semantic tokens), including light/dark theming and shared sizing/spacing/radius/elevation primitives.
- Core CSS component utilities for the first component set, including:
    - Actions: Button, Link (with standardized variants and semantics aligned to the design language).
    - Forms: Input, Input Error, Select, Checkbox, Radio, Toggle (including disabled and accessibility-related states where applicable).
    - Badges.
    - Containers & surfaces: Card and Divider.
    - Navigation & structure: Menu and Dropdown.
    - Feedback & system state: Alert and Loading.
    - Data display: Table and Stat.
    - Overlays: Dropdown panel/surface styles for floating content.
- Component playground to validate tokens, variants, and visual consistency across the system.
- Centralized `class-variance-authority (CVA)` configurations and strongly typed variant APIs for all implemented component families.
- Shared type scales and helpers for consistent sizing, intents, surfaces, and elevations across components.
- Tooling baseline for maintainability: TypeScript configuration (including build config), ESLint, Prettier, and formatting scripts.
- Path alias support (`@/*`) and refactored imports for improved project ergonomics.

### Changed

- Adopted Tailwind v4-friendly architecture by replacing legacy `@layer` patterns with the `@utility` API for custom utilities.
- Standardized visual terminology and naming conventions across components (e.g., removing “variant/size” wording from class names where redundant).
- Simplified and unified disabled-state styling and attribute handling across components.
- Refined component sizing model by introducing/standardizing the `SizeScale` type and extending size coverage (including XS and XL where applicable).
- Streamlined overlay API by removing placement/offset concerns from the CSS layer (delegated to Headless UI positioning).

### Fixed

- Improved theme correctness and token usage across components (e.g., hover/border behaviors, outline tokens adoption, and theme-aware code-inline background).
- Resolved styling inconsistencies and redundancies across utilities (e.g., dropdown/menu interactions, alert modifiers, button conflicts with Tailwind utilities).
- Cleaned up unused CSS files and removed redundant styles to reduce maintenance surface.

---
