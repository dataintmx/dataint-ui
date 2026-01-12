import type { CvaConfig, CvaProps } from "../../types/cva";
import type { LinkVariants } from "../../types/cva/action/link";

/**
 * Base CSS utility for all link variants.
 *
 * Consumers are expected to compose this with:
 *   cva(linkBase, linkConfig)
 */
export const linkBase = "link";

/**
 * CVA configuration object for Link.
 *
 * Important:
 * - This file exports configuration only.
 * - The actual `cva(...)` call must happen in the consuming project.
 */
export const linkConfig = {
  variants: {
    intent: {
      primary: "link-primary",
      secondary: "link-secondary",
    },

    size: {
      xs: "link-xs",
      sm: "link-sm",
      md: "link-md",
      lg: "link-lg",
    },

    block: {
      true: "link-block",
      false: "",
    },

    icon: {
      none: "",
      only: "link-icon-only",
      start: "link-icon-start",
      end: "link-icon-end",
    },

    disabled: {
      true: "link-disabled",
      false: "",
    },
  },

  /**
   * Default behavior: primary, medium, inline, with standard icon/text layout.
   */
  defaultVariants: {
    intent: "primary",
    size: "md",
    block: "false",
    icon: "none",
    disabled: "false",
  },

  compoundVariants: [],
} satisfies CvaConfig<LinkVariants>;

/**
 * Public prop type derived from the configuration object.
 */
export type LinkProps = CvaProps<typeof linkConfig>;
