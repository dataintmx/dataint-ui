/**
 * Base CSS utility for all link variants.
 *
 * Consumers are expected to compose this with:
 *   cva(linkBase, linkConfig)
 */
export const linkBase = "link";
/**
 * CVA configuration object for Link.
 *
 * Important:
 * - This file exports configuration only.
 * - The actual `cva(...)` call must happen in the consuming project.
 */
export const linkConfig = {
    variants: {
        intent: {
            neutral: "link-neutral",
            primary: "link-primary",
            secondary: "link-secondary",
            accent: "link-accent",
            info: "link-info",
            success: "link-success",
            warning: "link-warning",
            error: "link-error",
        },
        size: {
            xs: "link-xs",
            sm: "link-sm",
            md: "",
            lg: "link-lg",
            xl: "link-xl",
        },
        block: {
            true: "link-block",
            false: "",
        },
        icon: {
            none: "",
            only: "link-icon-only",
            start: "link-icon-start",
            end: "link-icon-end",
        },
        disabled: {
            true: "link-disabled",
            false: "",
        },
    },
    /**
     * Default behavior: primary, medium, inline, with standard icon/text layout.
     */
    defaultVariants: {
        intent: "primary",
        size: "md",
        block: false,
        icon: "none",
        disabled: false,
    },
    compoundVariants: [],
};
