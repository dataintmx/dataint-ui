import type { NavigationSize } from "@/types/cva/navigation";

/**
 * Logical state of the dropdown trigger.
 *
 * CSS supports open state via:
 * - [aria-expanded="true"]
 * - [data-state="open"]
 * - .is-open
 *
 * CVA uses a single canonical class (`is-open`) to keep the API declarative.
 */
export type DropdownState = "closed" | "open";

export type DropdownTriggerVariants = {
    size: Record<NavigationSize, string>;
    state: Record<DropdownState, string>;
    disabled: Record<"true" | "false", string>;
};
