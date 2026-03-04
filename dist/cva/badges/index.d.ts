import type { CvaProps } from "../../types/cva";
/**
 * Base utility for Badge.
 *
 * Consumers compose this with:
 *   cva(badgeBase, badgeConfig)
 */
export declare const badgeBase = "badge";
export declare const badgeConfig: {
    variants: {
        intent: {
            neutral: string;
            info: string;
            success: string;
            warning: string;
            error: string;
            primary: string;
            secondary: string;
            accent: string;
        };
        /**
         * Visual weight and surface treatment.
         * Matches the shared feedback variant scale.
         */
        variant: {
            default: string;
            solid: string;
            outlined: string;
            soft: string;
        };
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        rounded: {
            sm: string;
            md: string;
            pill: string;
        };
    };
    /**
     * Defaults align with base `.badge` variables:
     * - intent: neutral
     * - variant: solid (default)
     * - size: md
     * - rounded: md
     */
    defaultVariants: {
        intent: "neutral";
        variant: "default";
        size: "md";
        rounded: "md";
    };
    compoundVariants: never[];
};
export type BadgeProps = CvaProps<typeof badgeConfig>;
/**
 * Badge slots are plain utilities (no variants).
 * Exporting them avoids hardcoding strings in consumer projects.
 */
export declare const badgeIconBase = "badge-icon";
export declare const badgeLabelBase = "badge-label";
//# sourceMappingURL=index.d.ts.map