import type { CvaConfig, CvaProps } from "@/types/cva";
import type { DropdownItemVariants, DropdownOverlayVariants } from "@/types/cva/overlays/dropdown-overlay";

/**
 * The dropdown overlay CSS extends `.dropdown` with overlay tokens and styles
 * for `.dropdown-content`.
 *
 * Important:
 * - Positioning is handled by Headless UI.
 * - This config covers surface styling only.
 *
 * Consumers compose this with:
 *   cva(dropdownOverlayBase, dropdownOverlayConfig)
 */
export const dropdownOverlayBase = "dropdown";

export const dropdownOverlayConfig = {
    variants: {
        size: {
            xs: "dropdown-panel-xs",
            sm: "dropdown-panel-sm",
            md: "",
            lg: "dropdown-panel-lg",
            xl: "dropdown-panel-xl",
        },
    },

    /**
     * Default sizing matches the CSS defaults declared under `.dropdown`.
     * "md" is the baseline overlay min-width and padding/typography.
     */
    defaultVariants: {
        size: "md",
    },

    compoundVariants: [],
} satisfies CvaConfig<DropdownOverlayVariants>;

export type DropdownOverlayProps = CvaProps<typeof dropdownOverlayConfig>;

/**
 * Overlay structural utilities.
 *
 * These are not variant-driven; they are stable building blocks referenced by CSS.
 * Exporting them avoids hardcoding strings in consumer projects.
 */
export const dropdownContentBase = "dropdown-content";
export const dropdownMenuBase = "dropdown-menu";
export const dropdownItemBase = "dropdown-item";
export const dropdownTitleBase = "dropdown-title";

export const dropdownItemConfig = {
    variants: {
        state: {
            default: "",
            active: "is-active",
        },
        disabled: {
            true: "dropdown-item-disabled",
            false: "",
        },
    },
    defaultVariants: {
        state: "default",
        disabled: false,
    },
    compoundVariants: [],
} satisfies CvaConfig<DropdownItemVariants>;

export type DropdownItemProps = CvaProps<typeof dropdownItemConfig>;
