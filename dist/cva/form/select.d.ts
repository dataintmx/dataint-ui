import type { CvaProps } from "../../types/cva";
/**
 * Base CSS utility for Select.
 *
 * Consumers are expected to compose this with:
 *   cva(selectBase, selectConfig)
 */
export declare const selectBase = "select";
/**
 * CVA configuration object for Select.
 *
 * Based strictly on current CSS:
 * - Disabled: `.select-disabled` or `:disabled` / `[aria-disabled="true"]`
 * - Size variants are mentioned in comments but not implemented as utilities,
 *   so they are intentionally omitted.
 */
export declare const selectConfig: {
    variants: {
        disabled: {
            true: string;
            false: string;
        };
    };
    defaultVariants: {
        disabled: false;
    };
    compoundVariants: never[];
};
export type SelectProps = CvaProps<typeof selectConfig>;
//# sourceMappingURL=select.d.ts.map