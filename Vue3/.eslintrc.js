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
    "plugin:vue/vue3-recommended",
    "plugin:vue-pug-sfc/vue3-recommended"
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
      rules: {
        "vue/component-options-name-casing": [ "error" ],
        "vue/custom-event-name-casing": [ "error" ],
        "vue/html-button-has-type": [ "error" ],
        "vue/no-bare-strings-in-template": [ "error" ],
        "vue/no-child-content": [ "error" ],
        "vue/no-duplicate-attr-inheritance": [ "error" ],
        "vue/no-multiple-objects-in-class": [ "error" ],
        "vue/no-restricted-class": [ "error", "forbidden", "forbidden-two", "forbidden-three" ],
        "vue/no-restricted-custom-event": [ "error", "input", "/^forbidden/" ],
        "vue/no-restricted-static-attribute": [ "error", "foo", "bar" ],
        "vue/no-restricted-v-bind": [ "error", "/^v-/", "foo", "bar" ],
        "vue/no-static-inline-styles": [ "error", { "allowBinding": true } ],
        "vue/no-template-target-blank": [ "error" ]
      }
    }
  ]
}
