import type { CvaConfig, CvaProps } from "../../types/cva";
import type { DividerVariants } from "../../types/cva/surfaces/divider";

/**
 * Base CSS utility for Divider.
 *
 * Consumers are expected to compose this with:
 *   cva(dividerBase, dividerConfig)
 */
export const dividerBase = "divider";

export const dividerConfig = {
  variants: {
    variant: {
      /**
       * "default" maps to `.divider` base (no extra class).
       * Keep the name explicit to preserve readability in JSX props.
       */
      default: "",
      muted: "divider-muted",
      strong: "divider-strong",
    },
  },
  defaultVariants: {
    variant: "default",
  },
  compoundVariants: [],
} satisfies CvaConfig<DividerVariants>;

export type DividerProps = CvaProps<typeof dividerConfig>;
