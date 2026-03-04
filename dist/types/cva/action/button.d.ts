import type { BooleanVariantMap } from "../../../types/cva/common/boolean";
import type { SemanticIntent } from "../../../types/cva/common/intents";
import type { SizeScale } from "../../../types/cva/common/sizes";
/**
 * Button-specific size scale.
 * Buttons support an additional "xl" size.
 */
export type ButtonSize = SizeScale;
/**
 * Button visual variants.
 *
 * These variants describe structural presentation, not semantic meaning.
 */
export type ButtonVariant = "solid" | "outlined" | "ghost" | "soft";
/**
 * Internal shape of the Button CVA variants map.
 *
 * This type exists to:
 * - Keep the config object strictly typed
 * - Prevent accidental drift in supported variants
 * - Make the public API explicit and predictable
 */
export type ButtonVariants = {
    variant: Record<ButtonVariant, string>;
    intent: Record<SemanticIntent, string>;
    size: Record<ButtonSize, string>;
    block: BooleanVariantMap;
    icon: BooleanVariantMap;
    disabled: BooleanVariantMap;
};
//# sourceMappingURL=button.d.ts.map