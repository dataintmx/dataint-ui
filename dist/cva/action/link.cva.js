import { cva } from "class-variance-authority";
/**
 * Link CVA maps directly to dataint-ui CSS utilities:
 * - base: link
 * - intents: link-primary, link-secondary
 * - sizes: link-xs, link-sm, link-md, link-lg
 * - width: link-block
 * - icon relationship: link-icon-only, link-icon-start, link-icon-end
 * - disabled: link-disabled
 */
export const linkIntents = ["primary", "secondary"];
export const linkSizes = ["xs", "sm", "md", "lg"];
/**
 * Icon relationship between label and icon(s).
 * - "none": default behavior (no extra class)
 * - "only": icon-only link (no gap, centered)
 * - "start": icon before text (row)
 * - "end": icon after text (row-reverse)
 */
export const linkIconPositions = ["none", "only", "start", "end"];
export const linkStyles = cva("link", {
    variants: {
        intent: {
            primary: "link-primary",
            secondary: "link-secondary",
        },
        size: {
            xs: "link-xs",
            sm: "link-sm",
            md: "link-md",
            lg: "link-lg",
        },
        block: {
            true: "link-block",
            false: "",
        },
        icon: {
            none: "",
            only: "link-icon-only",
            start: "link-icon-start",
            end: "link-icon-end",
        },
        disabled: {
            true: "link-disabled",
            false: "",
        },
    },
    defaultVariants: {
        intent: "primary",
        size: "md",
        block: false,
        icon: "none",
        disabled: false,
    },
    compoundVariants: [],
});
