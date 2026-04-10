import type { CvaConfig, CvaProps } from "@/types/cva";
import type {
    SidebarNavIconVariants,
    SidebarTooltipVariants,
} from "@/types/cva/navigation/sidebar";

/* ------------------------------
   Sidebar tooltip
   ------------------------------ */

export const sidebarTooltipBase = "sidebar-tooltip";

export const sidebarTooltipConfig = {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
} satisfies CvaConfig<SidebarTooltipVariants>;

export type SidebarTooltipProps = CvaProps<typeof sidebarTooltipConfig>;

/* ------------------------------
   Sidebar nav icon
   ------------------------------ */

export const sidebarNavParentBase = "sidebar-nav-parent";
export const sidebarNavIconBase = "sidebar-nav-icon";

export const sidebarNavIconConfig = {
    variants: {},
    defaultVariants: {},
    compoundVariants: [],
} satisfies CvaConfig<SidebarNavIconVariants>;

export type SidebarNavIconProps = CvaProps<typeof sidebarNavIconConfig>;
