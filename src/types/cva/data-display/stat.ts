import type { SemanticIntent } from "@/types/cva/common/intents";
import type { ActionSize } from "@/types/cva/common/sizes";

/**
 * Stat density scale.
 *
 * This affects:
 * - padding
 * - title/value typography
 */
export type StatSize = Extract<ActionSize, "sm" | "md" | "lg">;

/**
 * Stat intents define the accent color applied to the metric value.
 *
 * Note:
 * - This is intentionally not `SemanticIntent` or `FeedbackIntent`.
 * - Stats currently support a focused set including `primary`.
 */
export type StatIntent = Extract<SemanticIntent, "neutral" | "primary" | "success" | "warning" | "error">;

export type StatVariants = {
    size: Record<StatSize, string>;
    intent: Record<StatIntent, string>;
};
