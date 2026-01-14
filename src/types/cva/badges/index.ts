import type { ActionSize } from "@/types/cva/common/sizes";
import type { FeedbackIntent, FeedbackVariant } from "@/types/cva/feedback";

/**
 * Badge sizing is specific to this family (height + padding + typography),
 * so we define its scale locally as a type derived from ActionSize (types are the source of truth).
 */
export type BadgeSize = Extract<ActionSize, "sm" | "md" | "lg">;

/**
 * Badge rounding controls the surface radius strategy.
 */
export type BadgeRounded = "sm" | "md" | "pill";

export type BadgeIntent = FeedbackIntent;

export type BadgeVariant = FeedbackVariant;

/**
 * Internal shape of the Badge CVA variants map.
 *
 * We use:
 * - BadgeIntent: neutral | info | success | warning | error
 * - BadgeVariant: subtle | solid | outline
 */
export type BadgeVariants = {
    intent: Record<BadgeIntent, string>;
    variant: Record<BadgeVariant, string>;
    size: Record<BadgeSize, string>;
    rounded: Record<BadgeRounded, string>;
};
