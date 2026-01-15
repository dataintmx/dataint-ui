import type { SizeScale } from "@/types/cva/common/sizes";

/**
 * Overlay panel sizing scale.
 *
 * This controls the dropdown overlay surface (min-width + padding + typography)
 * and is intentionally separate from the dropdown trigger sizing.
 */
export type OverlaySize = Extract<SizeScale, "sm" | "md" | "lg">;

/**
 * Internal shape of the overlay variants map.
 */
export type DropdownOverlayVariants = {
    size: Record<OverlaySize, string>;
};
