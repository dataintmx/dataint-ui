import type { CvaConfig, CvaProps } from "@/types/cva";
import type { StatVariants } from "@/types/cva/data-display/stat";

/**
 * Base utility for a single metric container.
 *
 * Consumers compose this with:
 *   cva(statBase, statConfig)
 */
export const statBase = "stat";

export const statConfig = {
    variants: {
        size: {
            xs: "stat-xs",
            sm: "stat-sm",
            md: "",
            lg: "stat-lg",
            xl: "stat-xl",
        },
        intent: {
            neutral: "stat-neutral",
            primary: "stat-primary",
            success: "stat-success",
            warning: "stat-warning",
            error: "stat-error",
        },
    },

    /**
     * Defaults align with `.stat` base styling:
     * - size: md
     * - intent: neutral (accent = base content)
     */
    defaultVariants: {
        size: "md",
        intent: "neutral",
    },

    compoundVariants: [],
} satisfies CvaConfig<StatVariants>;

export type StatProps = CvaProps<typeof statConfig>;

/**
 * Stat sub-structure utilities.
 *
 * These are not variant-driven, so we export stable class constants.
 */
export const statTitleBase = "stat-title";
export const statValueBase = "stat-value";
