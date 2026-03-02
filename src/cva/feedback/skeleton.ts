import type { SkeletonProps } from "@/types/cva/feedback/skeleton";

/**
 * Base utility class for the Skeleton primitive.
 *
 * Skeleton has no variants — it is always a rectangular block with
 * token-driven shimmer animation and `--radius-field` rounded corners.
 *
 * Consumers control dimensions via width / height utilities or inline styles.
 *
 * @example
 *   <div class="skeleton" style="height: 8rem"></div>
 *   <div class="skeleton" style="height: 1rem; width: 60%"></div>
 */
export const skeletonBase = "skeleton";

export type { SkeletonProps };
