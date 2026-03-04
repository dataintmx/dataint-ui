import type { CvaProps } from "../../types/cva";
/**
 * Base utility for the menu container.
 * Consumers compose this with: cva(menuBase, menuConfig)
 */
export declare const menuBase = "menu";
/**
 * Optional title utility used as a semantic section label inside menus.
 * This utility has no variants; we export it as a stable constant.
 */
export declare const menuTitleBase = "menu-title";
export declare const menuConfig: {
    variants: {
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
    defaultVariants: {
        size: "md";
    };
    compoundVariants: never[];
};
export type MenuProps = CvaProps<typeof menuConfig>;
/**
 * Base utility for individual menu items.
 *
 * Note:
 * - Active state is controlled by attributes/classes (aria-current, data-state, .is-active).
 * - Disabled is controlled by :disabled / aria-disabled at the DOM level.
 * - For CVA ergonomics we provide optional variants that map to those states.
 */
export declare const menuItemBase = "menu-item";
export declare const menuItemConfig: {
    variants: {
        state: {
            default: string;
            /**
             * CSS already supports multiple selectors for active:
             * - .is-active
             * - [aria-current="page"|"true"]
             * - [data-state="active"]
             *
             * We pick a single canonical class for CVA usage.
             */
            active: string;
        };
        disabled: {
            true: string;
            false: string;
        };
    };
    defaultVariants: {
        state: "default";
        disabled: false;
    };
    compoundVariants: never[];
};
export type MenuItemProps = CvaProps<typeof menuItemConfig>;
/**
 * Menu sub-structure class names.
 *
 * These are not utilities, but are referenced by CSS selectors.
 * Exporting them avoids hardcoding strings in consumer projects.
 */
export declare const menuIconBase = "menu-icon";
export declare const menuLabelBase = "menu-label";
//# sourceMappingURL=menu.d.ts.map