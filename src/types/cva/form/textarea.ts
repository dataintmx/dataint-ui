/**
 * Variants supported by the Textarea component.
 *
 * This type mirrors the CSS-only implementation and is intentionally minimal:
 * - `disabled`: maps to `.textarea-disabled` and HTML disabled attributes
 * - `error`: maps to `.textarea-error`
 */
export type TextareaVariants = {
    disabled: Record<"true" | "false", string>;
    error: Record<"true" | "false", string>;
};
