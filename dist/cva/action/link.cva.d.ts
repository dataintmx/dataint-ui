import { type VariantProps } from "class-variance-authority";
/**
 * Link CVA maps directly to dataint-ui CSS utilities:
 * - base: link
 * - intents: link-primary, link-secondary
 * - sizes: link-xs, link-sm, link-md, link-lg
 * - width: link-block
 * - icon relationship: link-icon-only, link-icon-start, link-icon-end
 * - disabled: link-disabled
 */
export declare const linkIntents: readonly ["primary", "secondary"];
export declare const linkSizes: readonly ["xs", "sm", "md", "lg"];
/**
 * Icon relationship between label and icon(s).
 * - "none": default behavior (no extra class)
 * - "only": icon-only link (no gap, centered)
 * - "start": icon before text (row)
 * - "end": icon after text (row-reverse)
 */
export declare const linkIconPositions: readonly ["none", "only", "start", "end"];
export declare const linkStyles: (props?: ({
    intent?: "primary" | "secondary" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
    block?: boolean | null | undefined;
    icon?: "none" | "only" | "start" | "end" | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export type LinkCvaProps = VariantProps<typeof linkStyles>;
export type LinkIntent = (typeof linkIntents)[number];
export type LinkSize = (typeof linkSizes)[number];
export type LinkIconPosition = (typeof linkIconPositions)[number];
//# sourceMappingURL=link.cva.d.ts.map