/**
 * Shared elevation levels used across surfaces and containers.
 *
 * Principles:
 * - Types are the source of truth (no runtime constants).
 * - Levels represent semantic depth, not implementation details.
 */
export type ElevationLevel = "1" | "2" | "3";
