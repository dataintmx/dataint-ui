import type { CvaProps } from "../../types/cva";
/**
 * Base utility for the dropdown container (layout only).
 */
export declare const dropdownBase = "dropdown";
/**
 * Base utility for the dropdown trigger/button.
 *
 * Consumers compose this with: cva(dropdownTriggerBase, dropdownTriggerConfig)
 */
export declare const dropdownTriggerBase = "dropdown-trigger";
export declare const dropdownTriggerConfig: {
    variants: {
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        state: {
            closed: string;
            open: string;
        };
        disabled: {
            true: string;
            false: string;
        };
    };
    defaultVariants: {
        size: "md";
        state: "closed";
        disabled: false;
    };
    compoundVariants: never[];
};
export type DropdownTriggerProps = CvaProps<typeof dropdownTriggerConfig>;
/**
 * Dropdown sub-structure class names.
 *
 * These are not utilities, but are referenced by CSS selectors.
 */
export declare const dropdownLabelBase = "dropdown-label";
export declare const dropdownChevronBase = "dropdown-chevron";
//# sourceMappingURL=dropdown.d.ts.map