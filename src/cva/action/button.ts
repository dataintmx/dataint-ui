import type { CvaConfig, CvaProps } from "@/types/cva";
import type { ButtonSize, ButtonVariants } from "@/types/cva/action/button";
import type { SemanticIntent } from "@/types/cva/common/intents";

/**
 * Base CSS utility for all button variants.
 *
 * Consumers are expected to compose this with:
 *   cva(buttonBase, buttonConfig)
 */
export const buttonBase = "btn";

/**
 * CVA configuration object for Button.
 *
 * Important:
 * - This file exports configuration only.
 * - The actual `cva(...)` call must happen in the consuming project.
 * - Boolean-like variants are modeled as "true" | "false" keys to align
 *   with utility-class patterns in CSS.
 */
export const buttonConfig = {
    variants: {
        variant: {
            solid: "",
            outline: "btn-outline",
            ghost: "btn-ghost",
        },

        intent: {
            neutral: "btn-neutral",
            primary: "btn-primary",
            secondary: "btn-secondary",
            accent: "btn-accent",
            info: "btn-info",
            success: "btn-success",
            warning: "btn-warning",
            error: "btn-error",
        },

        size: {
            xs: "btn-xs",
            sm: "btn-sm",
            md: "",
            lg: "btn-lg",
            xl: "btn-xl",
        },

        block: {
            true: "btn-block",
            false: "",
        },

        icon: {
            true: "btn-icon",
            false: "",
        },

        disabled: {
            true: "btn-disabled",
            false: "",
        },

        loading: {
            true: "btn-loading",
            false: "",
        },
    },

    /**
     * Default visual configuration.
     *
     * Note:
     * - Defaults use literal keys ("true" | "false") to match variant maps.
     * - Consumer-facing props remain boolean via `CvaProps`.
     */
    defaultVariants: {
        variant: "solid",
        size: "md",
        intent: "neutral",
        block: "false",
        icon: "false",
        disabled: "false",
        loading: "false",
    },

    compoundVariants: [],
} satisfies CvaConfig<ButtonVariants>;

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
