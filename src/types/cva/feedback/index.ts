import type { SemanticIntent } from "../common/intents";
import type { ActionSize } from "../common/sizes";

/**
 * Shared API scales for Feedback & System State components.
 *
 * Principles:
 * - Types are the source of truth (no runtime constants).
 * - We keep these scales aligned across feedback primitives (alert, loading, etc.).
 */

/**
 * Feedback components typically use a compact size scale.
 * This size impacts padding/typography for alerts and diameter/border for spinners.
 */
export type FeedbackSize = Extract<ActionSize, "sm" | "md" | "lg">;

/**
 * Feedback intents supported by Alert and Loading.
 *
 * Note:
 * - This is intentionally a subset of SemanticIntent.
 * - Alert/Loading do not support primary/secondary/accent.
 */
export type FeedbackIntent = Extract<
  SemanticIntent,
  "neutral" | "info" | "success" | "warning" | "error"
>;

/**
 * Feedback visual treatment.
 *
 * Meaning:
 * - subtle: lighter, quieter presence
 * - solid: stronger emphasis / higher contrast
 * - outline: transparent surface with accent border
 *
 * Not all components must implement all variants, but when they do,
 * they should reuse this scale.
 */
export type FeedbackVariant = "subtle" | "solid" | "outline";
