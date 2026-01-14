import type { ActionSize } from "@/types/cva/common/sizes";

/**
 * Table density scale.
 *
 * This is specific to tabular data display and controls:
 * - typography
 * - cell padding
 */
export type TableSize = Extract<ActionSize, "sm" | "md" | "lg">;

/**
 * Internal shape of the Table CVA variants map.
 */
export type TableVariants = {
    size: Record<TableSize, string>;
    striped: Record<"true" | "false", string>;
    rowHighlight: Record<"true" | "false", string>;
};
