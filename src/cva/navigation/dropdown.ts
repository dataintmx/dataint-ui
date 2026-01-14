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
            sm: "dropdown-sm",
            md: "",
            lg: "dropdown-lg",
        },
        state: {
            closed: "",
            open: "is-open",
        },
        disabled: {
            /**
             * Disabled styling is selector-based:
             *   .dropdown-trigger:disabled, .dropdown-trigger[aria-disabled="true"]
             *
             * Keep this variant for a consistent shared API. Consumers must set
             * the actual disabled attribute / aria-disabled for behavior and styling.
             */
            true: "",
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
