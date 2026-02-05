import type { CvaConfig, CvaProps } from "@/types/cva";
import type { TextareaVariants } from "@/types/cva/form/textarea";

/**
 * Base CSS utility for Textarea.
 *
 * Consumers are expected to compose this with:
 *   cva(textareaBase, textareaConfig)
 */
export const textareaBase = "textarea";

/**
 * CVA configuration object for Textarea.
 *
 * Based strictly on current CSS:
 * - Disabled: `.textarea-disabled` or `[disabled]` / `[aria-disabled="true"]`
 * - Error: `textarea.textarea-error` (+ focus-visible outline color override)
 */
export const textareaConfig = {
    variants: {
        disabled: {
            true: "textarea-disabled",
            false: "",
        },
        error: {
            true: "textarea-error",
            false: "",
        },
    },

    defaultVariants: {
        disabled: "false",
        error: "false",
    },

    compoundVariants: [],
} satisfies CvaConfig<TextareaVariants>;

export type TextareaProps = CvaProps<typeof textareaConfig>;
