import type { CvaProps } from "../../types/cva";
/**
 * Base utility for the spinner element.
 *
 * Consumers compose this with:
 *   cva(loadingBase, loadingConfig)
 */
export declare const loadingBase = "loading";
export declare const loadingConfig: {
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
        variant: {
            default: string;
            solid: string;
        };
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
    /**
     * Defaults should match the CSS defaults defined in `.loading`.
     * Your base defines:
     * - intent: base-content (neutral)
     * - size: ~20px (md)
     * - variant: default track (we map this explicitly as "default")
     */
    defaultVariants: {
        intent: "neutral";
        variant: "default";
        size: "md";
    };
    compoundVariants: never[];
};
export type LoadingProps = CvaProps<typeof loadingConfig>;
/**
 * Loading group is a layout helper, not a variant-driven component.
 * We export base classes for stable consumption.
 */
export declare const loadingGroupBase = "loading-group";
export declare const loadingTextBase = "loading-text";
//# sourceMappingURL=loading.d.ts.map