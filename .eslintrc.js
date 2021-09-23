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
        "vue/no-duplicate-attributes": "error"
      }
    }
  ]
}
