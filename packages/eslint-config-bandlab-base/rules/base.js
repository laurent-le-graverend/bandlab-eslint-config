module.exports = {
  extends: 'eslint:recommended',
  plugins: [
    'unicorn'
  ],
  rules: {
    'accessor-pairs': 0,
    'block-scoped-var': 2,
    'brace-style': 2,
    'camelcase': 2,
    'comma-spacing': 2,
    'complexity': [0, 11],
    'consistent-return': 0,
    'curly': [2, 'multi-line'],
    'dot-notation': [2, { 'allowKeywords': true }],
    'eol-last': 2,
    'eqeqeq': 2,
    'func-style': [2, 'declaration'],
    'guard-for-in': 2,
    'indent': [2, 2, { 'SwitchCase': 1 }],
    'key-spacing': [2, { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': [2, { 'before': true, 'after': true }],
    'linebreak-style': [2, 'unix'],
    'lines-around-comment': [0, { 'beforeBlockComment': true, 'beforeLineComment': true }],
    'new-cap': 2,
    'new-parens': 2,
    'no-alert': 0,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-catch-shadow': 2,
    'no-console': 0,
    'no-else-return': 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 1,
    'no-extra-parens': [2, 'functions'],
    'no-implied-eval': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': 2,
    'no-lone-blocks': 2,
    'no-loop-func': 2,
    'no-multi-spaces': [2],
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, { 'max': 1 }],
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-wrappers': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-return-assign': 2,
    'no-script-url': 2,
    'no-sequences': 2,
    'no-shadow': [0, { 'hoist': 'all' }],
    'no-shadow-restricted-names': 2,
    'no-spaced-func': 2,
    'no-trailing-spaces': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
    'no-unused-expressions': 2,
    'no-unused-vars': [2, { 'vars': 'all', 'args': 'after-used' }],
    'no-use-before-define': 0,
    'no-useless-call': 0,
    'no-useless-concat': 2,
    'no-void': 0,
    'no-with': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, { 'var': 'always', 'let': 'never', 'const': 'never' }],
    'prefer-template': 2,
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'semi': 2,
    'semi-spacing': [2, { 'before': false, 'after': true }],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [2, 'never', { 'asyncArrow': 'always' }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { 'words': true, 'nonwords': false }],
    'spaced-comment': [2, 'always'],
    'strict': [0],
    'template-curly-spacing': [2, 'never'],
    'yoda': 2,
    'valid-jsdoc': ['error', {
      'prefer': { 'arg': 'param', 'argument': 'param', 'class': 'constructor', 'return': 'returns', 'virtual': 'abstract' },
      'preferType': { 'boolean': 'Boolean', 'number': 'Number', 'object': 'Object', 'string': 'String' },
      'requireReturn': false
    }],
    'unicorn/catch-error-name': ['error', { 'name': 'err' }],
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/throw-new-error': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/no-array-instanceof': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/prefer-type-error': 'error'
  }
};
