import { defineConfig } from 'oxlint';

export default defineConfig({
  plugins: ['react'],
  categories: {
    correctness: 'error',
    suspicious: 'warn',
  },
  rules: {
    'react/display-name': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
  },
});
