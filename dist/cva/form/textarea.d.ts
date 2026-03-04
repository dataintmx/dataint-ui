import type { CvaProps } from "../../types/cva";
/**
 * Base CSS utility for Textarea.
 *
 * Consumers are expected to compose this with:
 *   cva(textareaBase, textareaConfig)
 */
export declare const textareaBase = "textarea";
/**
 * CVA configuration object for Textarea.
 *
 * Based strictly on current CSS:
 * - Disabled: `.textarea-disabled` or `[disabled]` / `[aria-disabled="true"]`
 * - Error: `textarea.textarea-error` (+ focus-visible outline color override)
 */
export declare const textareaConfig: {
    variants: {
        disabled: {
            true: string;
            false: string;
        };
        error: {
            true: string;
            false: string;
        };
    };
    defaultVariants: {
        disabled: false;
        error: false;
    };
    compoundVariants: never[];
};
export type TextareaProps = CvaProps<typeof textareaConfig>;
//# sourceMappingURL=textarea.d.ts.map