import type { CvaProps } from "../../types/cva";
/**
 * Base utility for the alert container.
 *
 * Consumers compose this with:
 *   cva(alertBase, alertConfig)
 */
export declare const alertBase = "alert";
export declare const alertConfig: {
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
    };
    /**
     * Defaults should match the base `.alert` design:
     * - intent: neutral
     * - variant: default (solid)
     * - size: md
     */
    defaultVariants: {
        intent: "neutral";
        variant: "default";
        size: "md";
    };
    compoundVariants: never[];
};
export type AlertProps = CvaProps<typeof alertConfig>;
/**
 * Alert slots are plain utilities (no variants).
 * Exporting them avoids hardcoding strings in consumer projects.
 */
export declare const alertIconBase = "alert-icon";
export declare const alertContentBase = "alert-content";
export declare const alertTitleBase = "alert-title";
export declare const alertMessageBase = "alert-message";
export declare const alertDismissBase = "alert-dismiss";
//# sourceMappingURL=alert.d.ts.map