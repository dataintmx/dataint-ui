import type { ActionSize } from "../common/sizes";
/**
 * Shared API scales for Navigation & Structure components.
 */

/**
 * Density sizing used by navigation surfaces (menus, dropdown triggers).
 *
 * "md" is the default (maps to base utilities with no extra class).
 */
export type NavigationSize = Extract<ActionSize, "sm" | "md" | "lg">;
