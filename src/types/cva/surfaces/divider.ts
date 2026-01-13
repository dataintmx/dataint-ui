/**
 * Divider variants control the contrast of the rule line.
 *
 * Default divider styling is intentionally subtle; variants allow
 * consumers to opt into stronger visual separation when needed.
 */
export type DividerVariant = "default" | "muted" | "strong";

export type DividerVariants = {
  variant: Record<DividerVariant, string>;
};
