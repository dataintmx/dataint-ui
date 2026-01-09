import { cva, type VariantProps } from "class-variance-authority";

/**
 * Button CVA maps directly to dataint-ui CSS utilities:
 * - base: btn
 * - intents: btn-primary, btn-neutral, ...
 * - variants: btn-outline, btn-ghost
 * - sizes: btn-xs, btn-sm, ...
 * - extras: btn-block, btn-icon, btn-disabled
 */

export const buttonIntents = [
  "neutral",
  "primary",
  "secondary",
  "accent",
  "info",
  "success",
  "warning",
  "error",
] as const;

export const buttonVariants = ["solid", "outline", "ghost"] as const;

export const buttonSizes = ["xs", "sm", "md", "lg", "xl"] as const;

type Intent = (typeof buttonIntents)[number];

const intentClass: Record<Intent, string> = {
  neutral: "btn-neutral",
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  info: "btn-info",
  success: "btn-success",
  warning: "btn-warning",
  error: "btn-error",
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
export const buttonStyles = cva("btn", {
  variants: {
    variant: {
      solid: "",
      outline: "btn-outline",
      ghost: "btn-ghost",
    },
    intent: {
      neutral: intentClass.neutral,
      primary: intentClass.primary,
      secondary: intentClass.secondary,
      accent: intentClass.accent,
      info: intentClass.info,
      success: intentClass.success,
      warning: intentClass.warning,
      error: intentClass.error,
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      md: "btn-md",
      lg: "btn-lg",
      xl: "btn-xl",
    },
    block: {
      true: "btn-block",
      false: "",
    },
    icon: {
      true: "btn-icon",
      false: "",
    },
    disabled: {
      true: "btn-disabled",
      false: "",
    },
    loading: {
      true: "btn-loading",
      false: "",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
    intent: "neutral",
    block: false,
    icon: false,
    disabled: false,
    loading: false,
  },
  compoundVariants: [],
});

export type ButtonCvaProps = VariantProps<typeof buttonStyles>;
export type ButtonIntent = Intent;
export type ButtonVariant = (typeof buttonVariants)[number];
export type ButtonSize = (typeof buttonSizes)[number];
