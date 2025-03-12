import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

// https://typescript-eslint.io/getting-started/typed-linting

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": "warn",
    },
  }
);
