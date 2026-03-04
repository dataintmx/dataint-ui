/**
 * Base utility for the alert container.
 *
 * Consumers compose this with:
 *   cva(alertBase, alertConfig)
 */
export const alertBase = "alert";
export const alertConfig = {
    variants: {
        intent: {
            neutral: "alert-neutral",
            info: "alert-info",
            success: "alert-success",
            warning: "alert-warning",
            error: "alert-error",
            primary: "alert-primary",
            secondary: "alert-secondary",
            accent: "alert-accent",
        },
        variant: {
            default: "",
            solid: "alert-solid",
            outlined: "alert-outlined",
            soft: "alert-soft",
        },
        size: {
            xs: "alert-xs",
            sm: "alert-sm",
            md: "",
            lg: "alert-lg",
            xl: "alert-xl",
        },
    },
    /**
     * Defaults should match the base `.alert` design:
     * - intent: neutral
     * - variant: default (solid)
     * - size: md
     */
    defaultVariants: {
        intent: "neutral",
        variant: "default",
        size: "md",
    },
    compoundVariants: [],
};
/**
 * Alert slots are plain utilities (no variants).
 * Exporting them avoids hardcoding strings in consumer projects.
 */
export const alertIconBase = "alert-icon";
export const alertContentBase = "alert-content";
export const alertTitleBase = "alert-title";
export const alertMessageBase = "alert-message";
export const alertDismissBase = "alert-dismiss";
