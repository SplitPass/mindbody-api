module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    "plugin:@typescript-eslint/strict",
    'prettier',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
    '@typescript-eslint/explicit-member-accessibility': ['warn', {
      accessibility: 'explicit',
      overrides: {
        accessors: 'explicit',
        constructors: 'no-public',
        methods: 'explicit',
        properties: 'off',
        parameterProperties: 'explicit'
      }
    }],
    '@typescript-eslint/no-empty-function': 'off',
    "@typescript-eslint/no-floating-promises": ['warn', {
      ignoreVoid: true,
      ignoreIIFE: true,
    }],
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
  },
};