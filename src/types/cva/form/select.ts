/**
 * Select variants for CVA config typing.
 *
 * Based strictly on current CSS utilities:
 * - `.select` (base)
 * - `.select-disabled` (disabled state utility)
 *
 * Notes:
 * - Boolean-like variants are modeled as "true" | "false" keys.
 */
export type SelectVariants = {
    disabled: Record<"true" | "false", string>;
};
