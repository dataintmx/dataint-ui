import type { CvaConfig, CvaProps } from "@/types/cva";
import type { CheckboxVariants } from "@/types/cva/form/checkbox";

/**
 * Base CSS utility for Checkbox.
 *
 * Consumers are expected to compose this with:
 *   cva(checkboxBase, checkboxConfig)
 */
export const checkboxBase = "checkbox";

/**
 * CVA configuration object for Checkbox.
 *
 * Notes:
 * - This file exports configuration only (no `cva(...)` call).
 * - Checked styling is handled by CSS (`:checked`, `[aria-checked="true"]`, `::before`),
 *   so there is no `checked` variant.
 * - Per current CSS, the only supported state variant is `disabled`.
 */
export const checkboxConfig = {
    variants: {
        disabled: {
            true: "checkbox-disabled",
            false: "",
        },
    },

    defaultVariants: {
        disabled: "false",
    },

    compoundVariants: [],
} satisfies CvaConfig<CheckboxVariants>;

export type CheckboxProps = CvaProps<typeof checkboxConfig>;
