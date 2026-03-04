import type { CvaProps } from "../../types/cva";
/**
 * Base utility class for the Progress primitive.
 *
 * Apply directly to a native `<progress>` element.
 *
 * Determinate — provide `value` and `max` (or `value` as 0–100):
 * @example
 *   <progress class="progress progress-primary" value="65" max="100" />
 *
 * Indeterminate — omit the `value` attribute entirely:
 * @example
 *   <progress class="progress progress-primary" />
 *
 * Accessibility:
 *   - The native `<progress>` element carries role="progressbar" implicitly.
 *   - For determinate mode, the browser sets aria-valuenow / aria-valuemin /
 *     aria-valuemax from the `value` and `max` attributes automatically.
 *   - For indeterminate mode no value attributes should be present.
 *   - Always associate a visible label via `aria-label` or `aria-labelledby`.
 */
export declare const progressBase = "progress";
export declare const progressConfig: {
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
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
    /**
     * Defaults match the CSS defaults defined in `.progress`.
     * - intent: primary (brand loading colour)
     * - size: md (0.5rem / 8px)
     */
    defaultVariants: {
        intent: "primary";
        size: "md";
    };
    compoundVariants: never[];
};
export type ProgressProps = CvaProps<typeof progressConfig>;
//# sourceMappingURL=progress.d.ts.map