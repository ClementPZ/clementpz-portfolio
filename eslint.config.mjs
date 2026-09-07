import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Pas de tiret cadratin dans ce que le visiteur lit : chaines, gabarits et
  // texte JSX. Les commentaires de code ne sont pas concernes, eslint ne les
  // voit pas. Decision du 2026-09-07, cf. "Regles strictes" dans CLAUDE.md.
  {
    files: ["src/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/\u2014/]",
          message:
            "Tiret cadratin interdit dans le contenu. Point median (·) pour un titre, tiret court (-) pour un intervalle.",
        },
        {
          selector: "TemplateElement[value.raw=/\u2014/]",
          message:
            "Tiret cadratin interdit dans le contenu. Point median (·) pour un titre, tiret court (-) pour un intervalle.",
        },
        {
          selector: "JSXText[value=/\u2014/]",
          message:
            "Tiret cadratin interdit dans le contenu. Point median (·) pour un titre, tiret court (-) pour un intervalle.",
        },
      ],
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
