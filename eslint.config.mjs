import css from "@eslint/css";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import { tailwind4 } from "tailwind-csstree";
import ts from "typescript-eslint";

export default defineConfig(
    {
        ignores: ["dist/", "node_modules/", "playground/"],
    },
    // JavaScript recommended config
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        ...js.configs.recommended,
    },

    // TypeScript recommended configs
    ...ts.configs.recommended.map(config => ({
        files: ["**/*.{js,jsx,ts,tsx}"],
        ...config,
    })),
    // TypeScript rules (library conventions)
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        rules: {
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],

            "@typescript-eslint/consistent-type-imports": [
                "error",
                { prefer: "type-imports", fixStyle: "separate-type-imports" },
            ],

            "@typescript-eslint/no-explicit-any": "error",
        },
    },

    // CSS files linting (official ESLint CSS support) — ONLY for CSS
    {
        files: ["**/*.css"],
        plugins: {
            css,
        },
        language: "css/css",
        languageOptions: {
            customSyntax: tailwind4,
            tolerant: true,
        },
        rules: {
            "css/no-empty-blocks": "error",
        },
    }
);
