import { defineConfig } from 'oxlint';

import unicornConfig from './unicorn.js';

export default defineConfig({
  extends: [unicornConfig],
  plugins: ['eslint', 'typescript'],
  categories: {
    correctness: 'error',
    suspicious: 'warn',
  },
  rules: {
    // eslint recommended rules overrides
    'no-case-declarations': 'error',
    // 'no-dupe-args': 'error', // Not supported by Oxlint.
    'no-empty': 'error',
    'no-fallthrough': 'error',
    // 'no-octal': 'error', // Not supported by Oxlint.
    'no-prototype-builtins': 'error',
    'no-redeclare': 'error',
    'no-regex-spaces': 'error',
    'no-undef': 'error',
    'no-unexpected-multiline': 'error',
    'no-useless-assignment': 'error',
    'preserve-caught-error': 'error',

    // typescript-eslint recommended rules overrides
    'typescript/ban-ts-comment': 'error',
    'typescript/no-empty-object-type': 'error',
    'typescript/no-explicit-any': 'error',
    'typescript/no-namespace': 'error',
    'typescript/no-require-imports': 'error',
    'typescript/no-unnecessary-type-constraint': 'error',
    'typescript/no-unsafe-function-type': 'error',
  },
});
