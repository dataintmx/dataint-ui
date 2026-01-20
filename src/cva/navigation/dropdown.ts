import type { CvaConfig, CvaProps } from "@/types/cva";
import type { DropdownTriggerVariants } from "@/types/cva/navigation/dropdown";

/**
 * Base utility for the dropdown container (layout only).
 */
export const dropdownBase = "dropdown";

/**
 * Base utility for the dropdown trigger/button.
 *
 * Consumers compose this with: cva(dropdownTriggerBase, dropdownTriggerConfig)
 */
export const dropdownTriggerBase = "dropdown-trigger";

export const dropdownTriggerConfig = {
    variants: {
        size: {
            xs: "dropdown-trigger-xs",
            sm: "dropdown-trigger-sm",
            md: "",
            lg: "dropdown-trigger-lg",
            xl: "dropdown-trigger-xl",
        },
        state: {
            closed: "",
            open: "is-open",
        },
        disabled: {
            true: "dropdown-trigger-disabled",
            false: "",
        },
    },
    defaultVariants: {
        size: "md",
        state: "closed",
        disabled: "false",
    },
    compoundVariants: [],
} satisfies CvaConfig<DropdownTriggerVariants>;

export type DropdownTriggerProps = CvaProps<typeof dropdownTriggerConfig>;

/**
 * Dropdown sub-structure class names.
 *
 * These are not utilities, but are referenced by CSS selectors.
 */
export const dropdownLabelBase = "dropdown-label";
export const dropdownChevronBase = "dropdown-chevron";
