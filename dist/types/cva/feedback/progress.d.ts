import type { FeedbackIntent, FeedbackSize } from "../../../types/cva/feedback";
/**
 * Progress intent scale.
 *
 * Follows FeedbackIntent so the bar colour matches the semantic meaning
 * of the operation it represents (e.g. success-green when complete,
 * error-red on failure, primary-brand during normal loading).
 */
export type ProgressIntent = FeedbackIntent;
/**
 * Progress size scale.
 *
 * Controls the bar height only; width is always block-level (100%).
 */
export type ProgressSize = FeedbackSize;
export type ProgressVariants = {
    intent: Record<ProgressIntent, string>;
    size: Record<ProgressSize, string>;
};
//# sourceMappingURL=progress.d.ts.map