import type { FeedbackIntent, FeedbackSize, FeedbackVariant } from "@/types/cva/feedback";

/**
 * Alert visual weight and surface treatment.
 */
export type AlertVariant = Extract<FeedbackVariant, "subtle" | "solid" | "outline">;

export type AlertVariants = {
    intent: Record<FeedbackIntent, string>;
    variant: Record<AlertVariant, string>;
    size: Record<FeedbackSize, string>;
};
