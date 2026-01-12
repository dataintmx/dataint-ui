import type { SemanticIntent } from "../common/intents";
import type { ActionSize } from "../common/sizes";

/**
 * Button-specific size scale.
 * Buttons support an additional "xl" size.
 */
export type ButtonSize = ActionSize | "xl";

/**
 * Button visual variants.
 *
 * These variants describe structural presentation, not semantic meaning.
 */
export type ButtonVariant = "solid" | "outline" | "ghost";

/**
 * Internal shape of the Button CVA variants map.
 *
 * This type exists to:
 * - Keep the config object strictly typed
 * - Prevent accidental drift in supported variants
 * - Make the public API explicit and predictable
 */
export type ButtonVariants = {
  variant: Record<ButtonVariant, string>;
  intent: Record<SemanticIntent, string>;
  size: Record<ButtonSize, string>;
  block: Record<"true" | "false", string>;
  icon: Record<"true" | "false", string>;
  disabled: Record<"true" | "false", string>;
  loading: Record<"true" | "false", string>;
};
