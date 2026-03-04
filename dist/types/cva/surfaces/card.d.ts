import type { ElevationLevel } from "../../../types/cva/common/elevation";
import type { Orientation, SurfaceSize } from "../../../types/cva/common/surfaces";
/**
 * Card variants describe surface treatment (border and shadow policy),
 * not semantic meaning (semantic meaning belongs to intents, usually).
 */
export type CardVariant = "default" | "subtle";
/**
 * Internal shape of the Card CVA variants map.
 *
 * This keeps the config object strictly typed and prevents accidental drift.
 */
export type CardVariants = {
    size: Record<SurfaceSize, string>;
    variant: Record<CardVariant, string>;
    level: Record<ElevationLevel, string>;
};
export type CardActionsVariants = {
    orientation: Record<Orientation, string>;
};
//# sourceMappingURL=card.d.ts.map