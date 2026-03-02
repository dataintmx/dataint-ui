import type { SizeScale } from "@/types/cva/common/sizes";

/**
 * Overlay panel sizing scale.
 *
 * This controls the dropdown overlay surface (min-width + padding + typography)
 * and is intentionally separate from the dropdown trigger sizing.
 */
export type OverlaySize = SizeScale;

/**
 * Internal shape of the overlay variants map.
 */
export type DropdownOverlayVariants = {
    size: Record<OverlaySize, string>;
};

export type DropdownItemState = "default" | "active";

export type DropdownItemVariants = {
    state: Record<DropdownItemState, string>;
    disabled: Record<"true" | "false", string>;
};
