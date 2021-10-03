module.exports = {

  parser: "@typescript-eslint/parser",

  parserOptions: {
    sourceType: "module",
    project: "tsconfig.json"
  },

  env: {
    node: true
  },

  extends: [
    "plugin:vue/recommended",
    "plugin:vue-pug-sfc/recommended",
  ],

  plugins: [
    "@typescript-eslint",
  ],

  rules: {},

  overrides: [
    {
      files: [
        "*.vue",
        "*.vue.ts"
      ],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: "tsconfig.json",
        extraFileExtensions: [ ".vue" ],
        tsconfigRootDir: "./"
      },
      "rules": {
        // They are already coming from `extends`
      }
    }
  ]
}
