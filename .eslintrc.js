// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi':['error','always'],
    'indent':0,
    'space-before-function-paren':0,
    'space-before-blocks':0,
    'key-spacing':0,
    "no-trailing-spaces":0,
    "keyword-spacing":0,
    "comma-spacing":0,
    "arrow-spacing":0,
    "space-infix-ops":0,
    "no-undef":0,
    "no-unused-vars":0,
    "no-multiple-empty-lines":0,
    "no-tabs": 0,
    "no-side-effects-in-computed-properties": 0,
    "no-parsing-error": 0,
    "x-invalid-end-tag": 0

  }
}
