import type { CvaConfig, CvaProps } from "@/types/cva";
import type { SelectVariants } from "@/types/cva/form/select";

/**
 * Base CSS utility for Select.
 *
 * Consumers are expected to compose this with:
 *   cva(selectBase, selectConfig)
 */
export const selectBase = "select";

/**
 * CVA configuration object for Select.
 *
 * Based strictly on current CSS:
 * - Disabled: `.select-disabled` or `:disabled` / `[aria-disabled="true"]`
 * - Size variants are mentioned in comments but not implemented as utilities,
 *   so they are intentionally omitted.
 */
export const selectConfig = {
    variants: {
        disabled: {
            true: "select-disabled",
            false: "",
        },
    },

    defaultVariants: {
        disabled: "false",
    },

    compoundVariants: [],
} satisfies CvaConfig<SelectVariants>;

export type SelectProps = CvaProps<typeof selectConfig>;
