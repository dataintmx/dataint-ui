import type { CvaConfig, CvaProps } from "@/types/cva";
import type { ToggleVariants } from "@/types/cva/form/toggle";

/**
 * Base CSS utility for Toggle.
 *
 * Consumers are expected to compose this with:
 *   cva(toggleBase, toggleConfig)
 */
export const toggleBase = "toggle";

/**
 * CVA configuration object for Toggle.
 *
 * Based strictly on current CSS:
 * - Disabled: `.toggle-disabled` or `:disabled` / `[aria-disabled="true"]`
 * - Checked visuals are handled by CSS state selectors
 *   (`:checked`, `[aria-checked="true"]`, `:has(:checked)`), so no variant is needed.
 */
export const toggleConfig = {
    variants: {
        disabled: {
            true: "toggle-disabled",
            false: "",
        },
    },

    defaultVariants: {
        disabled: "false",
    },

    compoundVariants: [],
} satisfies CvaConfig<ToggleVariants>;

export type ToggleProps = CvaProps<typeof toggleConfig>;
