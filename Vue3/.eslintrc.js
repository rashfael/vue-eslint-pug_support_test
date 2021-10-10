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
    "plugin:vue/base",
    "plugin:vue/vue3-essential",
    "plugin:vue/vue3-strongly-recommended",
    "plugin:vue/vue3-recommended"
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
      }
    }
  ]
}
