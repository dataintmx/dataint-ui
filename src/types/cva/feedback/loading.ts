import type { FeedbackIntent, FeedbackSize, FeedbackVariant } from "@/types/cva/feedback";

/**
 * Loading (spinner) visual weight.
 *
 * - subtle: lighter track
 * - solid: stronger track + higher opacity
 */
export type LoadingVariant = Extract<FeedbackVariant, "subtle" | "solid">;

export type LoadingVariants = {
    intent: Record<FeedbackIntent, string>;
    variant: Record<LoadingVariant, string>;
    size: Record<FeedbackSize, string>;
};
