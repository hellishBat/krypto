module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-tailwindcss', "stylelint-config-prettier"],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'string-quotes': 'single',
    'font-family-name-quotes': 'always-unless-keyword',
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['/^([A-Za-z]+[A-Z]+[a-z0-9]*|\\$[A-Za-z]+[A-Z]+[a-zA-Z0-9]*)$/'],
      },
    ],
  },
}
