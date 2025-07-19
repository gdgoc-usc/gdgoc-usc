import js from '@eslint/js';
import typescript from 'typescript-eslint';

export default [
  js.configs.recommended,
  ...typescript.configs.recommended,
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // General code quality rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'off', // Using @typescript-eslint version
      'no-undef': 'off', // TypeScript handles this
      'no-var': 'error',
    },
  },
  {
    files: ['**/*.{test,spec}.{js,ts,jsx,tsx}'],
    rules: {
      // Test files can be more lenient
      'no-console': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: [
      'astro.config.*',
      'vite.config.*',
      'vitest.config.*',
      'eslint.config.*',
      '.lintstagedrc.*',
      '.commitlintrc.*',
    ],
    rules: {
      // Config files
      'no-console': 'off',
    },
  },
  {
    ignores: [
      'dist/**',
      'build/**',
      '.astro/**',
      'node_modules/**',
      '*.min.js',
      '*.min.css',
      'coverage/**',
    ],
  },
];
