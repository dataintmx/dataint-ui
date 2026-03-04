/**
 * Base utility for the table component.
 *
 * Notes:
 * - `table-base` is an alias of `.table` in CSS.
 * - We keep `tableBase` pointing to the canonical class consumers should use.
 */
export const tableBase = "table";
export const tableConfig = {
    variants: {
        size: {
            xs: "table-xs",
            sm: "table-sm",
            md: "",
            lg: "table-lg",
            xl: "table-xl",
        },
        striped: {
            true: "table-striped",
            false: "",
        },
        rowHighlight: {
            true: "table-row-highlight",
            false: "",
        },
    },
    /**
     * Defaults align with `.table` base styling:
     * - size: md (text-sm, standard padding)
     * - no stripes
     * - no hover highlight
     */
    defaultVariants: {
        size: "md",
        striped: false,
        rowHighlight: false,
    },
    compoundVariants: [],
};
/**
 * Optional alias base (kept for compatibility with CSS naming).
 * Use `tableBase` by default.
 */
export const tableBaseAlias = "table-base";
