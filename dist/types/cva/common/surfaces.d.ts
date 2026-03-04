import type { SizeScale } from "../../../types/cva/common/sizes";
/**
 * Shared surface sizing scale.
 *
 * Note:
 * - This is intentionally different from SizeScale.
 * - Surfaces tend to use fewer size steps (e.g., sm / md / lg) focused on padding.
 */
export type SurfaceSize = SizeScale;
/**
 * Common orientation scale for layout containers.
 *
 * We keep this generic so it can be reused by other surface sub-structures
 * (e.g., card-actions, stacks, toolbars) without creating new scales.
 */
export type Orientation = "horizontal" | "vertical";
//# sourceMappingURL=surfaces.d.ts.map