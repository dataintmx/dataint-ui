import type { CvaConfig, CvaProps } from "../../types/cva";
import type {
  CardActionsVariants,
  CardVariants,
} from "../../types/cva/surfaces/card";

/**
 * Base CSS utility for the Card container.
 *
 * Consumers are expected to compose this with:
 *   cva(cardBase, cardConfig)
 */
export const cardBase = "card";

/**
 * CVA configuration object for Card.
 *
 * Important:
 * - Export configuration only (no `cva(...)` execution).
 * - Defaults are aligned with CSS defaults declared in `.card`.
 */
export const cardConfig = {
  variants: {
    /**
     * Size controls internal padding (via CSS variables).
     * "md" is the base/default and maps to no extra class.
     */
    size: {
      sm: "card-sm",
      md: "",
      lg: "card-lg",
    },

    /**
     * Variant controls border presence / tone and shadow policy.
     * "default" maps to the base `.card` treatment (no extra class).
     */
    variant: {
      default: "",
      subtle: "card-subtle",
      ghost: "card-ghost",
    },

    /**
     * Level controls elevation (shadow depth).
     * "2" matches the base `.card` default (no extra class).
     */
    level: {
      "1": "card-level-1",
      "2": "card-level-2",
      "3": "card-level-3",
    },
  },

  defaultVariants: {
    size: "md",
    variant: "default",
    level: "2",
  },

  compoundVariants: [],
} satisfies CvaConfig<CardVariants>;

export type CardProps = CvaProps<typeof cardConfig>;

/**
 * Card sub-structures are plain utilities (no variants):
 * - card-title
 * - card-body
 *
 * We export them as bases for consistency and consumer ergonomics.
 * Consumers can use them directly (no CVA required).
 */
export const cardTitleBase = "card-title";
export const cardBodyBase = "card-body";

/**
 * Card actions have an orientation API, so we provide a dedicated config
 * for the `card-actions` element.
 */
export const cardActionsBase = "card-actions";

export const cardActionsConfig = {
  variants: {
    orientation: {
      horizontal: "card-actions-horizontal",
      vertical: "card-actions-vertical",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
  compoundVariants: [],
} satisfies CvaConfig<CardActionsVariants>;

export type CardActionsProps = CvaProps<typeof cardActionsConfig>;
