// .eslintrc.js
// https://stackoverflow.com/questions/42706584/eslint-error-parsing-error-the-keyword-const-is-reserved
// https://github.com/AtomLinter/linter-eslint/issues/462
// https://github.com/vuejs/eslint-plugin-vue/issues/746
// https://eslint.vuejs.org/user-guide/#faq
module.exports = {
  "rules": {
    "no-mixed-spaces-and-tabs": 0, // disable rule
  },
  "extends": ["plugin:vue/base"],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "parser": "babel-eslint",
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "env": {
    "es6": true
  }
}
