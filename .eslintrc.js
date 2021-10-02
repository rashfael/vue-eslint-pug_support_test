module.exports = {

  parser: "@typescript-eslint/parser",

  parserOptions: {
    sourceType: "module",
    project: "tsconfig.json"
  },

  env: {
    node: true
  },

  plugins: [
    "@typescript-eslint",
    "vue"
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
        "vue/no-duplicate-attributes": "error",
        "vue/no-dupe-v-else-if": "error",
        "vue/no-parsing-error": "error",
        "vue/no-template-key": "error",
        "vue/no-textarea-mustache": "error",
        "vue/no-unused-vars": "error",
        "vue/no-use-v-if-with-v-for": "error",
        "vue/require-component-is": "error",
        "vue/require-v-for-key": "error",
        "vue/use-v-on-exact": "error",
        "vue/valid-template-root": "error",
        "vue/valid-v-bind": "error",
        "vue/valid-v-cloak": "error",
        "vue/valid-v-else-if": "error",
        "vue/valid-v-else": "error",
        "vue/no-unused-components": "error"
      }
    }
  ]
}
