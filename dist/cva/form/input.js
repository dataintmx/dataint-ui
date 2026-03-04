/**
 * Base CSS utility for Input.
 *
 * Consumers are expected to compose this with:
 *   cva(inputBase, inputConfig)
 */
export const inputBase = "input";
/**
 * CVA configuration object for Input.
 *
 * Based strictly on current CSS:
 * - Disabled: `.input-disabled` or `[disabled]` / `[aria-disabled="true"]`
 * - Error: `input.input-error` (+ focus-visible outline color override)
 */
export const inputConfig = {
    variants: {
        disabled: {
            true: "input-disabled",
            false: "",
        },
        error: {
            true: "input-error",
            false: "",
        },
    },
    defaultVariants: {
        disabled: false,
        error: false,
    },
    compoundVariants: [],
};
