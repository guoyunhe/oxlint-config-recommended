import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { expect, it } from 'vitest';

import config from '../src/index.ts';
import jsxA11yConfig from '../src/jsx-a11y.ts';
import reactConfig from '../src/react.ts';
import unicornConfig from '../src/unicorn.ts';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const categoryOptions: Record<string, string> = {
  allow: '-A',
  error: '-D',
  warn: '-W',
};

function getDuplicatedCategoryRules(
  candidate: { categories?: object; rules?: object },
  pluginOptions: string[],
) {
  const arguments_ = Object.entries(candidate.categories ?? {}).flatMap(([category, severity]) => {
    const option = categoryOptions[severity];

    expect(option, `Unsupported category severity: ${severity}`).toBeDefined();

    return [option, category];
  });
  const result = spawnSync(
    'pnpm',
    [
      'exec',
      'oxlint',
      '--disable-nested-config',
      ...pluginOptions,
      ...arguments_,
      '--print-config',
      'src/index.ts',
    ],
    {
      cwd: projectRoot,
      encoding: 'utf8',
    },
  );

  expect(result.status, result.stderr || result.stdout).toBe(0);

  const categoryRules = JSON.parse(result.stdout).rules;
  const categorySeverity: Record<string, string> = {
    allow: 'allow',
    error: 'deny',
    warn: 'warn',
  };
  return Object.entries(candidate.rules ?? {})
    .filter(
      ([rule, severity]) =>
        typeof severity === 'string' && categoryRules[rule] === categorySeverity[severity],
    )
    .map(([rule]) => rule);
}

it('does not repeat category settings in rules at the same severity', () => {
  expect(getDuplicatedCategoryRules(config, [])).toEqual([]);
});

it('enables React recommended rules', () => {
  expect(reactConfig.plugins).toEqual(['react']);
  expect(reactConfig.categories).toEqual({
    correctness: 'error',
    suspicious: 'warn',
  });
  expect(reactConfig.rules).toMatchObject({
    'react/display-name': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/react-in-jsx-scope': 'off',
  });
  expect(Object.keys(reactConfig.rules ?? {}).some((rule) => rule.startsWith('jsx-a11y/'))).toBe(
    false,
  );
});

it('enables JSX accessibility recommended rules', () => {
  expect(jsxA11yConfig.plugins).toEqual(['jsx-a11y']);
  expect(jsxA11yConfig.categories).toEqual({
    correctness: 'error',
    suspicious: 'warn',
  });
  expect(jsxA11yConfig.rules).toMatchObject({
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/no-autofocus': 'error',
    'jsx-a11y/no-static-element-interactions': [
      'error',
      {
        allowExpressionValues: true,
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
  });
});

it('enables Unicorn recommended rules', () => {
  expect(unicornConfig.plugins).toEqual(['unicorn']);
  expect(unicornConfig.categories).toEqual({
    correctness: 'error',
    suspicious: 'warn',
  });
  expect(unicornConfig.rules).toMatchObject({
    'unicorn/catch-error-name': 'error',
    'unicorn/prefer-array-find': 'error',
  });
});

it('does not repeat React category settings in rules at the same severity', () => {
  expect(getDuplicatedCategoryRules(reactConfig, ['--react-plugin'])).toEqual([]);
});

it('does not repeat JSX accessibility category settings in rules at the same severity', () => {
  expect(getDuplicatedCategoryRules(jsxA11yConfig, ['--jsx-a11y-plugin'])).toEqual([]);
});

it('does not repeat Unicorn category settings in rules at the same severity', () => {
  expect(getDuplicatedCategoryRules(unicornConfig, [])).toEqual([]);
});
