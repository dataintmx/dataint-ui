import type { CvaConfig, CvaProps } from "../../types/cva";
import type { AlertVariants } from "../../types/cva/feedback/alert";

/**
 * Base utility for the alert container.
 *
 * Consumers compose this with:
 *   cva(alertBase, alertConfig)
 */
export const alertBase = "alert";

export const alertConfig = {
  variants: {
    intent: {
      neutral: "alert-neutral",
      info: "alert-info",
      success: "alert-success",
      warning: "alert-warning",
      error: "alert-error",
    },
    variant: {
      subtle: "alert-subtle",
      solid: "alert-solid",
      outline: "alert-outline",
    },
    size: {
      sm: "alert-sm",
      md: "alert-md",
      lg: "alert-lg",
    },
  },

  /**
   * Defaults should match the base `.alert` design:
   * - intent: neutral
   * - variant: subtle (base derives subtle surfaces)
   * - size: md
   */
  defaultVariants: {
    intent: "neutral",
    variant: "subtle",
    size: "md",
  },

  compoundVariants: [],
} satisfies CvaConfig<AlertVariants>;

export type AlertProps = CvaProps<typeof alertConfig>;

/**
 * Alert slots are plain utilities (no variants).
 * Exporting them avoids hardcoding strings in consumer projects.
 */
export const alertIconBase = "alert-icon";
export const alertContentBase = "alert-content";
export const alertTitleBase = "alert-title";
export const alertMessageBase = "alert-message";
export const alertDismissBase = "alert-dismiss";
