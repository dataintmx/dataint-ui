export type CvaVariantsShape = Record<string, Record<string, string>>;
type VariantValue<K extends PropertyKey> = K extends "true" | "false" ? boolean : K;
/**
 * Helper: given a variants map V and a variant key K,
 * returns the allowed consumer value type for that variant.
 */
type VariantValueFor<V extends CvaVariantsShape, K extends keyof V> = VariantValue<keyof V[K]>;
/**
 * A reusable “selection” object for variants:
 * - keys are variant names
 * - values are allowed variant values
 */
type CvaVariantSelection<V extends CvaVariantsShape> = Partial<{
    [K in keyof V]: VariantValueFor<V, K> | null | undefined;
}>;
export type CvaConfig<V extends CvaVariantsShape> = {
    variants: V;
    /**
     * Default variants:
     * - keys must exist in `variants`
     * - values are the allowed variant values
     * - "true"/"false" keys become boolean defaults
     */
    defaultVariants?: CvaVariantSelection<V>;
    /**
     * Compound variants:
     * - same value typing rules as props/defaultVariants
     * - supports `class` and `className`
     */
    compoundVariants?: Array<CvaVariantSelection<V> & {
        class?: string;
        className?: string;
    }>;
};
export type CvaProps<C extends {
    variants: CvaVariantsShape;
}> = {
    [K in keyof C["variants"]]?: VariantValue<keyof C["variants"][K]> | null | undefined;
} & {
    class?: string;
    className?: string;
};
export {};
//# sourceMappingURL=index.d.ts.map