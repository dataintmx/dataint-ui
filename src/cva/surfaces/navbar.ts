import type { CvaConfig, CvaProps } from "@/types/cva";
import type { NavbarVariants } from "@/types/cva/surfaces/navbar";

/**
 * Base CSS utility for Navbar.
 * Using `.navbar` alone should be enough for the common toolbar use case.
 */
export const navbarBase = "navbar";

/**
 * CVA config for Navbar.
 * Defaults map to the base `.navbar` behavior (no extra class).
 */
export const navbarConfig = {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
} satisfies CvaConfig<NavbarVariants>;

export type NavbarProps = CvaProps<typeof navbarConfig>;
