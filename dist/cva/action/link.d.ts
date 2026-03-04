import type { CvaProps } from "../../types/cva";
/**
 * Base CSS utility for all link variants.
 *
 * Consumers are expected to compose this with:
 *   cva(linkBase, linkConfig)
 */
export declare const linkBase = "link";
/**
 * CVA configuration object for Link.
 *
 * Important:
 * - This file exports configuration only.
 * - The actual `cva(...)` call must happen in the consuming project.
 */
export declare const linkConfig: {
    variants: {
        intent: {
            neutral: string;
            primary: string;
            secondary: string;
            accent: string;
            info: string;
            success: string;
            warning: string;
            error: string;
        };
        size: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
        block: {
            true: string;
            false: string;
        };
        icon: {
            none: string;
            only: string;
            start: string;
            end: string;
        };
        disabled: {
            true: string;
            false: string;
        };
    };
    /**
     * Default behavior: primary, medium, inline, with standard icon/text layout.
     */
    defaultVariants: {
        intent: "primary";
        size: "md";
        block: false;
        icon: "none";
        disabled: false;
    };
    compoundVariants: never[];
};
/**
 * Public prop type derived from the configuration object.
 */
export type LinkProps = CvaProps<typeof linkConfig>;
//# sourceMappingURL=link.d.ts.map