import { type VariantProps } from "class-variance-authority";
/**
 * Button CVA maps directly to dataint-ui CSS utilities:
 * - base: btn
 * - intents: btn-primary, btn-neutral, ...
 * - variants: btn-outline, btn-ghost
 * - sizes: btn-xs, btn-sm, ...
 * - extras: btn-block, btn-icon, btn-disabled
 */
export declare const buttonIntents: readonly ["neutral", "primary", "secondary", "accent", "info", "success", "warning", "error"];
export declare const buttonVariants: readonly ["solid", "outline", "ghost"];
export declare const buttonSizes: readonly ["xs", "sm", "md", "lg", "xl"];
type Intent = (typeof buttonIntents)[number];
export declare const buttonStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | null | undefined;
    intent?: "neutral" | "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | "xl" | null | undefined;
    block?: boolean | null | undefined;
    icon?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
    loading?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type ButtonCvaProps = VariantProps<typeof buttonStyles>;
export type ButtonIntent = Intent;
export type ButtonVariant = (typeof buttonVariants)[number];
export type ButtonSize = (typeof buttonSizes)[number];
export {};
//# sourceMappingURL=button.cva.d.ts.map