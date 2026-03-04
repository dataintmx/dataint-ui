import type { CvaProps } from "../../types/cva";
/**
 * Base CSS utility for Input.
 *
 * Consumers are expected to compose this with:
 *   cva(inputBase, inputConfig)
 */
export declare const inputBase = "input";
/**
 * CVA configuration object for Input.
 *
 * Based strictly on current CSS:
 * - Disabled: `.input-disabled` or `[disabled]` / `[aria-disabled="true"]`
 * - Error: `input.input-error` (+ focus-visible outline color override)
 */
export declare const inputConfig: {
    variants: {
        disabled: {
            true: string;
            false: string;
        };
        error: {
            true: string;
            false: string;
        };
    };
    defaultVariants: {
        disabled: false;
        error: false;
    };
    compoundVariants: never[];
};
export type InputProps = CvaProps<typeof inputConfig>;
//# sourceMappingURL=input.d.ts.map