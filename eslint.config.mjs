import js from "@eslint/js";
import ts from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig(
    {
        ignores: ["dist/", "node_modules/", "playground/"],
    },
    js.configs.recommended,
    ts.configs.recommended,
    // TypeScript rules (library conventions)
    {
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],

            "@typescript-eslint/consistent-type-imports": [
                "error",
                { prefer: "type-imports", fixStyle: "separate-type-imports" },
            ],

            "@typescript-eslint/no-explicit-any": "error",
        },
    }
);
