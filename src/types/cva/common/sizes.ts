/**
 * Shared sizing scales for action-like components (buttons, links, etc.).
 *
 * Principles:
 * - Types are the source of truth (no runtime string arrays).
 * - Keep scales small and consistent across families.
 * - Extend only when a component clearly needs it (e.g., Button supports "xl").
 */

/**
 * Default sizing scale for action components.
 */
export type ActionSize = "xs" | "sm" | "md" | "lg";

/**
 * Button-specific size scale.
 * Buttons support an additional "xl" size.
 */
export type ButtonSize = ActionSize | "xl";
