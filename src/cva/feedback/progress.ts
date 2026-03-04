import type { CvaConfig, CvaProps } from "@/types/cva";
import type { ProgressVariants } from "@/types/cva/feedback/progress";

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
export const progressBase = "progress";

export const progressConfig = {
    variants: {
        intent: {
            neutral: "progress-neutral",
            info: "progress-info",
            success: "progress-success",
            warning: "progress-warning",
            error: "progress-error",
            primary: "progress-primary",
            secondary: "progress-secondary",
            accent: "progress-accent",
        },
        size: {
            xs: "progress-xs",
            sm: "progress-sm",
            md: "",
            lg: "progress-lg",
            xl: "progress-xl",
        },
    },

    /**
     * Defaults match the CSS defaults defined in `.progress`.
     * - intent: primary (brand loading colour)
     * - size: md (0.5rem / 8px)
     */
    defaultVariants: {
        intent: "primary",
        size: "md",
    },

    compoundVariants: [],
} satisfies CvaConfig<ProgressVariants>;

export type ProgressProps = CvaProps<typeof progressConfig>;
