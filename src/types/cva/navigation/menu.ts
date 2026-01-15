import type { NavigationSize } from ".";

/**
 * Menu container variants.
 *
 * Currently the CSS exposes only size (density), implemented via CSS variables.
 * The default "md" maps to the base `.menu` styles (no extra class).
 */
export type MenuVariants = {
    size: Record<NavigationSize, string>;
};

/**
 * Logical state of a menu item.
 *
 * We intentionally model "active" as an explicit prop to support cases where
 * consumers want a declarative API instead of relying only on DOM attributes.
 */
export type MenuItemState = "default" | "active";

export type MenuItemVariants = {
    state: Record<MenuItemState, string>;
    disabled: Record<"true" | "false", string>;
};
