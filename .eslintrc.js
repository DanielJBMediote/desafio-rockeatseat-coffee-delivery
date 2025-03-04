module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/jsx-max-props-per-line': [1, { "maximum": 1 }],
    "max-len": ["error", { "code": 80, "ignoreComments": true }]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
