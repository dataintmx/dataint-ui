import type { CvaConfig, CvaProps } from "@/types/cva";
import type { SemanticIntent } from "@/types/cva/common/intents";
import type { RadioVariants } from "@/types/cva/form/radio";

/**
 * Base CSS utility for Radio.
 *
 * Consumers are expected to compose this with:
 *   cva(radioBase, radioConfig)
 */
export const radioBase = "radio";

/**
 * CVA configuration object for Radio.
 *
 * Based strictly on current CSS:
 * - Disabled: `.radio-disabled` or `:disabled` / `[aria-disabled="true"]`
 * - Intent: `.radio-{intent}` sets CSS variables used by checked styles
 * - Checked visuals are handled by CSS (`:checked`, `::before`)
 */
export const radioConfig = {
    variants: {
        intent: {
            neutral: "radio-neutral",
            primary: "radio-primary",
            secondary: "radio-secondary",
            accent: "radio-accent",
            info: "radio-info",
            success: "radio-success",
            warning: "radio-warning",
            error: "radio-error",
        },

        disabled: {
            true: "radio-disabled",
            false: "",
        },
    },

    defaultVariants: {
        intent: "neutral",
        disabled: false,
    },

    compoundVariants: [],
} satisfies CvaConfig<RadioVariants>;

export type RadioProps = CvaProps<typeof radioConfig>;
export type RadioIntent = SemanticIntent;
