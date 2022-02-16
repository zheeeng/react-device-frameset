module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  env: {
    browser: true,
    node: true,
  },
  ignorePatterns: ['**/{node_modules,dist}', 'plugins', '*.js'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['react', '@typescript-eslint'],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
    },
  },
  rules: {
    quotes: ['error', 'single'],
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: ['^_', 'React'],
      },
    ],
  },
}
