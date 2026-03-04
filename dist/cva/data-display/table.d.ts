import type { CvaProps } from "../../types/cva";
/**
 * Base utility for the table component.
 *
 * Notes:
 * - `table-base` is an alias of `.table` in CSS.
 * - We keep `tableBase` pointing to the canonical class consumers should use.
 */
export declare const tableBase = "table";
export declare const tableConfig: {
    variants: {
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        striped: {
            true: string;
            false: string;
        };
        rowHighlight: {
            true: string;
            false: string;
        };
    };
    /**
     * Defaults align with `.table` base styling:
     * - size: md (text-sm, standard padding)
     * - no stripes
     * - no hover highlight
     */
    defaultVariants: {
        size: "md";
        striped: false;
        rowHighlight: false;
    };
    compoundVariants: never[];
};
export type TableProps = CvaProps<typeof tableConfig>;
/**
 * Optional alias base (kept for compatibility with CSS naming).
 * Use `tableBase` by default.
 */
export declare const tableBaseAlias = "table-base";
//# sourceMappingURL=table.d.ts.map