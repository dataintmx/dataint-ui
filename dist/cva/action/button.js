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
            outlined: "btn-outlined",
            ghost: "btn-ghost",
            soft: "btn-soft",
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
        block: false,
        icon: false,
        disabled: false,
    },
    compoundVariants: [],
};
