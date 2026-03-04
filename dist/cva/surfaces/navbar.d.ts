import type { CvaProps } from "../../types/cva";
/**
 * Base CSS utility for Navbar.
 * Using `.navbar` alone should be enough for the common toolbar use case.
 */
export declare const navbarBase = "navbar";
/**
 * CVA config for Navbar.
 * Defaults map to the base `.navbar` behavior (no extra class).
 */
export declare const navbarConfig: {
    variants: {};
    defaultVariants: {};
    compoundVariants: never[];
};
export type NavbarProps = CvaProps<typeof navbarConfig>;
//# sourceMappingURL=navbar.d.ts.map