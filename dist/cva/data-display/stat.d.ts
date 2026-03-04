import type { CvaProps } from "../../types/cva";
/**
 * Base utility for a single metric container.
 *
 * Consumers compose this with:
 *   cva(statBase, statConfig)
 */
export declare const statBase = "stat";
export declare const statConfig: {
    variants: {
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        intent: {
            neutral: string;
            primary: string;
            success: string;
            warning: string;
            error: string;
        };
    };
    /**
     * Defaults align with `.stat` base styling:
     * - size: md
     * - intent: neutral (accent = base content)
     */
    defaultVariants: {
        size: "md";
        intent: "neutral";
    };
    compoundVariants: never[];
};
export type StatProps = CvaProps<typeof statConfig>;
/**
 * Stat sub-structure utilities.
 *
 * These are not variant-driven, so we export stable class constants.
 */
export declare const statTitleBase = "stat-title";
export declare const statValueBase = "stat-value";
//# sourceMappingURL=stat.d.ts.map