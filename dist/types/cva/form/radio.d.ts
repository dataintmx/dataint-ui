import type { SemanticIntent } from "../../../types/cva/common/intents";
/**
 * Radio variants for CVA config typing.
 *
 * Based strictly on current CSS:
 * - `.radio` (base)
 * - `.radio-disabled` (disabled state utility)
 * - `.radio-{intent}` classes that only set CSS variables
 *
 * Notes:
 * - Boolean-like variants are modeled as "true" | "false" keys.
 * - `intent` keys are sourced from `SemanticIntent`.
 */
export type RadioVariants = {
    intent: Record<SemanticIntent, string>;
    disabled: Record<"true" | "false", string>;
};
export type RadioIntent = SemanticIntent;
//# sourceMappingURL=radio.d.ts.map