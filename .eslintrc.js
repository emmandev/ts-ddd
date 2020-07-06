module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    extends: [
      'airbnb-base',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
      'plugin:prettier/recommended',
      'prettier/@typescript-eslint',
    ],
    env: {
      node: true,
      mocha: true,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/camelcase': 'off',
      'import/extensions': ['error', 'never', { packages: 'always' }],
      camelcase: 'off',
      'no-underscore-dangle': 'off',
      'class-methods-use-this': 'off',
      'func-names': 'off',
      'max-classes-per-file': 'off',
      'max-len': ['error', 120],
      'linebreak-style': ['error'],
      'no-unused-expressions': 'off',
      'prettier/prettier': 'error',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  };
  