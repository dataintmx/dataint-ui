import type { CvaProps } from "../../types/cva";
import type { ButtonSize } from "../../types/cva/action/button";
import type { SemanticIntent } from "../../types/cva/common/intents";
/**
 * Base CSS utility for all button variants.
 *
 * Consumers are expected to compose this with:
 *   cva(buttonBase, buttonConfig)
 */
export declare const buttonBase = "btn";
/**
 * CVA configuration object for Button.
 *
 * Important:
 * - This file exports configuration only.
 * - The actual `cva(...)` call must happen in the consuming project.
 * - Boolean-like variants are modeled as "true" | "false" keys to align
 *   with utility-class patterns in CSS.
 */
export declare const buttonConfig: {
    variants: {
        variant: {
            solid: string;
            outlined: string;
            ghost: string;
            soft: string;
        };
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
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        block: {
            true: string;
            false: string;
        };
        icon: {
            true: string;
            false: string;
        };
        disabled: {
            true: string;
            false: string;
        };
    };
    /**
     * Default visual configuration.
     *
     * Note:
     * - Defaults use literal keys ("true" | "false") to match variant maps.
     * - Consumer-facing props remain boolean via `CvaProps`.
     */
    defaultVariants: {
        variant: "solid";
        size: "md";
        intent: "neutral";
        block: false;
        icon: false;
        disabled: false;
    };
    compoundVariants: never[];
};
/**
 * Public prop type derived from the configuration object.
 *
 * Consumers receive:
 * - Strongly typed variant props
 * - Boolean ergonomics for boolean-like variants
 * - Optional class / className passthrough
 */
export type ButtonProps = CvaProps<typeof buttonConfig>;
/**
 * Re-export intent and size types for convenience and consistency
 * across consuming applications.
 */
export type ButtonIntent = SemanticIntent;
export type ButtonSizeType = ButtonSize;
//# sourceMappingURL=button.d.ts.map