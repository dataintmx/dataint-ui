import type { CvaProps } from "../../types/cva";
/**
 * Base CSS utility for the Card container.
 *
 * Consumers are expected to compose this with:
 *   cva(cardBase, cardConfig)
 */
export declare const cardBase = "card";
/**
 * CVA configuration object for Card.
 *
 * Important:
 * - Export configuration only (no `cva(...)` execution).
 * - Defaults are aligned with CSS defaults declared in `.card`.
 */
export declare const cardConfig: {
    variants: {
        /**
         * Size controls internal padding (via CSS variables).
         * "md" is the base/default and maps to no extra class.
         */
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        /**
         * Variant controls border presence / tone and shadow policy.
         * "default" maps to the base `.card` treatment (no extra class).
         */
        variant: {
            default: string;
            subtle: string;
        };
        /**
         * Level controls elevation (shadow depth).
         * "2" matches the base `.card` default (no extra class).
         */
        level: {
            "1": string;
            "2": string;
            "3": string;
        };
    };
    defaultVariants: {
        size: "md";
        variant: "default";
        level: "2";
    };
    compoundVariants: never[];
};
export type CardProps = CvaProps<typeof cardConfig>;
/**
 * Card sub-structures are plain utilities (no variants):
 * - card-title
 * - card-body
 *
 * We export them as bases for consistency and consumer ergonomics.
 * Consumers can use them directly (no CVA required).
 */
export declare const cardTitleBase = "card-title";
export declare const cardBodyBase = "card-body";
/**
 * Card actions have an orientation API, so we provide a dedicated config
 * for the `card-actions` element.
 */
export declare const cardActionsBase = "card-actions";
export declare const cardActionsConfig: {
    variants: {
        orientation: {
            horizontal: string;
            vertical: string;
        };
    };
    defaultVariants: {
        orientation: "horizontal";
    };
    compoundVariants: never[];
};
export type CardActionsProps = CvaProps<typeof cardActionsConfig>;
//# sourceMappingURL=card.d.ts.map