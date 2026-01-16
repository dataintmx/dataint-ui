import type { FeedbackIntent, FeedbackSize, FeedbackVariant } from "@/types/cva/feedback";

/**
 * Loading (spinner) visual weight.
 *
 * - default: base track
 * - solid: stronger track + higher opacity
 */
export type LoadingVariant = Extract<FeedbackVariant, "default" | "solid">;

export type LoadingVariants = {
    intent: Record<FeedbackIntent, string>;
    variant: Record<LoadingVariant, string>;
    size: Record<FeedbackSize, string>;
};
