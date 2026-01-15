import type { CvaConfig, CvaProps } from "@/types/cva";
import type { MenuItemVariants, MenuVariants } from "@/types/cva/navigation/menu";

/**
 * Base utility for the menu container.
 * Consumers compose this with: cva(menuBase, menuConfig)
 */
export const menuBase = "menu";

/**
 * Optional title utility used as a semantic section label inside menus.
 * This utility has no variants; we export it as a stable constant.
 */
export const menuTitleBase = "menu-title";

export const menuConfig = {
    variants: {
        size: {
            sm: "menu-sm",
            md: "",
            lg: "menu-lg",
        },
    },
    defaultVariants: {
        size: "md",
    },
    compoundVariants: [],
} satisfies CvaConfig<MenuVariants>;

export type MenuProps = CvaProps<typeof menuConfig>;

/**
 * Base utility for individual menu items.
 *
 * Note:
 * - Active state is controlled by attributes/classes (aria-current, data-state, .is-active).
 * - Disabled is controlled by :disabled / aria-disabled at the DOM level.
 * - For CVA ergonomics we provide optional variants that map to those states.
 */
export const menuItemBase = "menu-item";

export const menuItemConfig = {
    variants: {
        state: {
            default: "",
            /**
             * CSS already supports multiple selectors for active:
             * - .is-active
             * - [aria-current="page"|"true"]
             * - [data-state="active"]
             *
             * We pick a single canonical class for CVA usage.
             */
            active: "is-active",
        },
        disabled: {
            true: "menu-item-disabled",
            false: "",
        },
    },
    defaultVariants: {
        state: "default",
        disabled: "false",
    },
    compoundVariants: [],
} satisfies CvaConfig<MenuItemVariants>;

export type MenuItemProps = CvaProps<typeof menuItemConfig>;

/**
 * Menu sub-structure class names.
 *
 * These are not utilities, but are referenced by CSS selectors.
 * Exporting them avoids hardcoding strings in consumer projects.
 */
export const menuIconBase = "menu-icon";
export const menuLabelBase = "menu-label";
