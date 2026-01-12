/**
 * Internal typing utilities for CVA configuration objects.
 *
 * Goal:
 * - Export CVA config objects (not the result of calling `cva(...)`)
 * - Keep strong type hints for consumers
 * - Avoid duplicating string literal unions via runtime constants
 *
 * This file intentionally models only the subset of CVA’s config surface
 * that we need across DataInt projects.
 */

/**
 * A variant map:
 * - variantName -> (variantValue -> className)
 *
 * Example:
 * {
 *   size: { sm: "btn-sm", md: "btn-md" }
 * }
 */
export type CvaVariantsShape = Record<string, Record<string, string>>;

/**
 * Minimal CVA config shape used by consumers as:
 *   cva(baseClass, config)
 *
 * Notes:
 * - We keep this small and stable. If we need more features later, we extend it.
 * - `compoundVariants` supports both `class` and `className` for compatibility
 *   with different CVA/consumer conventions.
 */
export type CvaConfig<V extends CvaVariantsShape> = {
  variants: V;

  /**
   * Default variants must reference keys in the `variants` object.
   * We model the value type as the key of each variant map.
   */
  defaultVariants?: Partial<{ [K in keyof V]: keyof V[K] }>;

  /**
   * Compound variants apply additional classes when a set of variant values match.
   */
  compoundVariants?: Array<
    Partial<{ [K in keyof V]: keyof V[K] }> & {
      class?: string;
      className?: string;
    }
  >;
};

/**
 * Helper: translate "true" | "false" variant keys into boolean props.
 *
 * Rationale:
 * - In CSS utilities, it's common to model boolean variants as:
 *     disabled: { true: "btn-disabled", false: "" }
 * - We want consumer props to be ergonomic:
 *     disabled?: boolean
 */
type VariantValue<K extends PropertyKey> = K extends "true" | "false"
  ? boolean
  : K;

/**
 * Derive a strongly-typed props shape from a config object.
 *
 * - Keys come from `config.variants`
 * - Values are unions of each variant's keys
 * - Boolean-like variants ("true" | "false") become boolean props
 * - Also supports `class` / `className` passthrough for convenience
 */
export type CvaProps<C extends { variants: CvaVariantsShape }> = {
  [K in keyof C["variants"]]?: VariantValue<keyof C["variants"][K]>;
} & {
  class?: string;
  className?: string;
};
