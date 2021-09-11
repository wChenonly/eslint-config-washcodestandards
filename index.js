const rules = require('./rules');
module.exports = {
  parser: 'vue-eslint-parser',
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended'
  ],
  plugins: [],
  rules: rules
}
