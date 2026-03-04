import type { CvaProps } from "../../types/cva";
import type { SemanticIntent } from "../../types/cva/common/intents";
/**
 * Base CSS utility for Radio.
 *
 * Consumers are expected to compose this with:
 *   cva(radioBase, radioConfig)
 */
export declare const radioBase = "radio";
/**
 * CVA configuration object for Radio.
 *
 * Based strictly on current CSS:
 * - Disabled: `.radio-disabled` or `:disabled` / `[aria-disabled="true"]`
 * - Intent: `.radio-{intent}` sets CSS variables used by checked styles
 * - Checked visuals are handled by CSS (`:checked`, `::before`)
 */
export declare const radioConfig: {
    variants: {
        intent: {
            neutral: string;
            primary: string;
            secondary: string;
            accent: string;
            info: string;
            success: string;
            warning: string;
            error: string;
        };
        disabled: {
            true: string;
            false: string;
        };
    };
    defaultVariants: {
        intent: "neutral";
        disabled: false;
    };
    compoundVariants: never[];
};
export type RadioProps = CvaProps<typeof radioConfig>;
export type RadioIntent = SemanticIntent;
//# sourceMappingURL=radio.d.ts.map