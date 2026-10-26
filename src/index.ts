import { defineConfig } from 'oxlint';

export default defineConfig({
  categories: {
    correctness: 'error',
    suspicious: 'warn',
  },
  rules: {
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
  },
});
