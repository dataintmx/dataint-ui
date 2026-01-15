import type { SizeScale } from "@/types/cva/common/sizes";

/**
 * Link semantic intents.
 *
 * These represent meaning (primary vs secondary), not structural variants.
 * Structural presentation is handled by other variants (e.g., icon relationship).
 */
export type LinkIntent = "primary" | "secondary";

/**
 * Defines how an icon relates to the link label.
 *
 * - none: default layout (no forced direction)
 * - only: icon-only affordance (no gap, centered)
 * - start: icon before text
 * - end: icon after text (row-reverse)
 */
export type LinkIcon = "none" | "only" | "start" | "end";

/**
 * Internal shape of the Link CVA variants map.
 *
 * This type exists to:
 * - Keep the config object strictly typed
 * - Prevent accidental drift in supported variants
 * - Make the public API explicit and predictable
 */
export type LinkVariants = {
    intent: Record<LinkIntent, string>;
    size: Record<SizeScale, string>;
    block: Record<"true" | "false", string>;
    icon: Record<LinkIcon, string>;
    disabled: Record<"true" | "false", string>;
};
