module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false
      }
    ],
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    camelcase: 'error',
    'import/no-default-export': 'error',
    'import/order': 'error',
    'react/prop-types': 'off',
    'no-trailing-spaces': 'error',
    'no-unused-vars': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    '@typescript-eslint/camelcase': 'off',
    'semi': ['error', 'never'],
    quotes: ['error', 'single']
  },
  overrides: [{
    files: [
      '**/pages/*.tsx', // Gatsby requires pages to have default exports
      '**/**/*stories.*',
      '*.storybook/**/**.*'
    ],
    rules: {
      'import/no-default-export': 'off'
    }
  },
  {
    files: ['**/test.*'],
    rules: {
      'no-undef': 0
    }
  }]
};
