import type { CvaProps } from "../../types/cva";
/**
 * Base CSS utility for Divider.
 *
 * Consumers are expected to compose this with:
 *   cva(dividerBase, dividerConfig)
 */
export declare const dividerBase = "divider";
export declare const dividerConfig: {
    variants: {
        variant: {
            /**
             * "default" maps to `.divider` base (no extra class).
             * Keep the name explicit to preserve readability in JSX props.
             */
            default: string;
            muted: string;
            strong: string;
        };
    };
    defaultVariants: {
        variant: "default";
    };
    compoundVariants: never[];
};
export type DividerProps = CvaProps<typeof dividerConfig>;
//# sourceMappingURL=divider.d.ts.map