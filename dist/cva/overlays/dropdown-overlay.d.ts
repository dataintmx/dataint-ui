import type { CvaProps } from "../../types/cva";
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
export declare const dropdownOverlayBase = "dropdown";
export declare const dropdownOverlayConfig: {
    variants: {
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    };
    /**
     * Default sizing matches the CSS defaults declared under `.dropdown`.
     * "md" is the baseline overlay min-width and padding/typography.
     */
    defaultVariants: {
        size: "md";
    };
    compoundVariants: never[];
};
export type DropdownOverlayProps = CvaProps<typeof dropdownOverlayConfig>;
/**
 * Overlay structural utilities.
 *
 * These are not variant-driven; they are stable building blocks referenced by CSS.
 * Exporting them avoids hardcoding strings in consumer projects.
 */
export declare const dropdownContentBase = "dropdown-content";
export declare const dropdownMenuBase = "dropdown-menu";
export declare const dropdownItemBase = "dropdown-item";
export declare const dropdownTitleBase = "dropdown-title";
export declare const dropdownItemConfig: {
    variants: {
        state: {
            default: string;
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
export type DropdownItemProps = CvaProps<typeof dropdownItemConfig>;
//# sourceMappingURL=dropdown-overlay.d.ts.map