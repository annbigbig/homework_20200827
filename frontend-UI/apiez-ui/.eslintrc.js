// .eslintrc.js
// https://stackoverflow.com/questions/42706584/eslint-error-parsing-error-the-keyword-const-is-reserved
// https://github.com/AtomLinter/linter-eslint/issues/462
module.exports = {
  "rules": {
    "no-mixed-spaces-and-tabs": 0, // disable rule
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "env": {
    "es6": true
  }
}
