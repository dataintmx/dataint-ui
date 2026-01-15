import css from "@eslint/css";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import { tailwind4 } from "tailwind-csstree";
import ts from "typescript-eslint";

const JS_TS_FILES = ["**/*.{js,jsx,ts,tsx}"];

function scopeToJsTs(config) {
    if (Array.isArray(config)) {
        return config.map(c => ({ ...c, files: JS_TS_FILES }));
    }
    return { ...config, files: JS_TS_FILES };
}

export default defineConfig(
    {
        ignores: ["dist/", "node_modules/", "playground/"],
    },

    // Apply JS/TS recommended ONLY to JS/TS files
    scopeToJsTs(js.configs.recommended),
    ...scopeToJsTs(ts.configs.recommended),

    // TypeScript rules (library conventions)
    {
        files: JS_TS_FILES,
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
        plugins: { css },
        language: "css/css",
        languageOptions: {
            // Prevent false positives with Tailwind v4 directives (@theme, @utility, etc.)
            customSyntax: tailwind4,
        },
        rules: {
            "css/no-duplicate-imports": "error",
            "css/no-empty-blocks": "error",
            "css/no-invalid-at-rules": "error",
            "css/no-invalid-properties": "error",
        },
    }
);
