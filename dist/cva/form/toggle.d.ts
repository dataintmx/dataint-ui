import type { CvaProps } from "../../types/cva";
/**
 * Base CSS utility for Toggle.
 *
 * Consumers are expected to compose this with:
 *   cva(toggleBase, toggleConfig)
 */
export declare const toggleBase = "toggle";
/**
 * CVA configuration object for Toggle.
 *
 * Based strictly on current CSS:
 * - Disabled: `.toggle-disabled` or `:disabled` / `[aria-disabled="true"]`
 * - Checked visuals are handled by CSS state selectors
 *   (`:checked`, `[aria-checked="true"]`, `:has(:checked)`), so no variant is needed.
 */
export declare const toggleConfig: {
    variants: {
        disabled: {
            true: string;
            false: string;
        };
    };
    defaultVariants: {
        disabled: false;
    };
    compoundVariants: never[];
};
export type ToggleProps = CvaProps<typeof toggleConfig>;
//# sourceMappingURL=toggle.d.ts.map