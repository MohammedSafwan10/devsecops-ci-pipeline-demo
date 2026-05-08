const globals = require("globals");

module.exports = [
  {
    ignores: [
      "coverage/**",
      "node_modules/**",
      ".terraform/**",
      "docs/**"
    ]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      curly: "error",
      eqeqeq: ["error", "always"],
      "no-console": "off",
      "no-var": "error",
      "prefer-const": "error",
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    }
  }
];
