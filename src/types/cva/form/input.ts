/**
 * Input variants for CVA config typing.
 *
 * Based strictly on current CSS utilities:
 * - `.input` (base)
 * - `.input-disabled` (disabled state utility)
 * - `.input-error` (error state via class on the element)
 *
 * Notes:
 * - Boolean-like variants are modeled as "true" | "false" keys.
 */
export type InputVariants = {
    disabled: Record<"true" | "false", string>;
    error: Record<"true" | "false", string>;
};
