import type { CvaConfig, CvaProps } from "@/types/cva";
import type { LoadingVariants } from "@/types/cva/feedback/loading";

/**
 * Base utility for the spinner element.
 *
 * Consumers compose this with:
 *   cva(loadingBase, loadingConfig)
 */
export const loadingBase = "loading";

export const loadingConfig = {
    variants: {
        intent: {
            neutral: "loading-neutral",
            info: "loading-info",
            success: "loading-success",
            warning: "loading-warning",
            error: "loading-error",
            primary: "loading-primary",
            secondary: "loading-secondary",
            accent: "loading-accent",
        },
        variant: {
            default: "",
            solid: "loading-solid",
        },
        size: {
            xs: "loading-xs",
            sm: "loading-sm",
            md: "",
            lg: "loading-lg",
            xl: "loading-xl",
        },
    },

    /**
     * Defaults should match the CSS defaults defined in `.loading`.
     * Your base defines:
     * - intent: base-content (neutral)
     * - size: ~20px (md)
     * - variant: default track (we map this explicitly as "default")
     */
    defaultVariants: {
        intent: "neutral",
        variant: "default",
        size: "md",
    },

    compoundVariants: [],
} satisfies CvaConfig<LoadingVariants>;

export type LoadingProps = CvaProps<typeof loadingConfig>;

/**
 * Loading group is a layout helper, not a variant-driven component.
 * We export base classes for stable consumption.
 */
export const loadingGroupBase = "loading-group";
export const loadingTextBase = "loading-text";
