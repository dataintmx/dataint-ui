import type { CvaConfig, CvaProps } from "@/types/cva";
import type { BadgeVariants } from "@/types/cva/badges";

/**
 * Base utility for Badge.
 *
 * Consumers compose this with:
 *   cva(badgeBase, badgeConfig)
 */
export const badgeBase = "badge";

export const badgeConfig = {
    variants: {
        intent: {
            neutral: "badge-neutral",
            info: "badge-info",
            success: "badge-success",
            warning: "badge-warning",
            error: "badge-error",
        },

        /**
         * Visual weight and surface treatment.
         * Matches the shared feedback variant scale.
         */
        variant: {
            subtle: "badge-subtle",
            solid: "badge-solid",
            outline: "badge-outline",
        },

        size: {
            sm: "badge-sm",
            md: "badge-md",
            lg: "badge-lg",
        },

        rounded: {
            sm: "badge-rounded-sm",
            md: "badge-rounded-md",
            pill: "badge-rounded-pill",
        },
    },

    /**
     * Defaults align with base `.badge` variables:
     * - intent: neutral
     * - variant: subtle
     * - size: md
     * - rounded: md
     */
    defaultVariants: {
        intent: "neutral",
        variant: "subtle",
        size: "md",
        rounded: "md",
    },

    compoundVariants: [],
} satisfies CvaConfig<BadgeVariants>;

export type BadgeProps = CvaProps<typeof badgeConfig>;

/**
 * Badge slots are plain utilities (no variants).
 * Exporting them avoids hardcoding strings in consumer projects.
 */
export const badgeIconBase = "badge-icon";
export const badgeLabelBase = "badge-label";
