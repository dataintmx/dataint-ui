import type { SemanticIntent } from "@/types/cva/common/intents";
import type { SizeScale } from "@/types/cva/common/sizes";

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
export type FeedbackSize = SizeScale;

/**
 * Feedback intents supported by Alert and Loading.
 *
 * Note:
 * - This is intentionally a subset of SemanticIntent.
 * - Alert/Loading do not support primary/secondary/accent.
 */
export type FeedbackIntent = SemanticIntent;

/**
 * Feedback visual treatment.
 *
 * Meaning:
 * - default: base level emphasis / subtle background
 * - solid: stronger emphasis / higher contrast
 * - outlined: transparent surface with accent border
 *
 * Not all components must implement all variants, but when they do,
 * they should reuse this scale.
 */
export type FeedbackVariant = "default" | "solid" | "outlined" | "soft";
