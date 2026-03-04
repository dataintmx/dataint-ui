/**
 * Toggle variants for CVA config typing.
 *
 * Based strictly on current CSS utilities:
 * - `.toggle` (base)
 * - `.toggle-disabled` (disabled state utility)
 *
 * Notes:
 * - Boolean-like variants are modeled as "true" | "false" keys.
 * - Checked styling is handled by CSS (`:checked`, `[aria-checked="true"]`, `:has(:checked)`),
 *   so there is no `checked` variant here.
 */
export type ToggleVariants = {
    disabled: Record<"true" | "false", string>;
};
//# sourceMappingURL=toggle.d.ts.map