import js from "@eslint/js";
import ts from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig(
  // Global ignores
  {
    ignores: ["dist/", "node_modules/", "playground/"],
  },

  // JavaScript linting
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ...js.configs.recommended,
  },

  // TypeScript linting
  ...ts.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: ["**/*.{ts,tsx}"],
  })),

  // TypeScript rules (library conventions)
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
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
