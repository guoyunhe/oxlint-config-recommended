import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect, it } from 'vitest';
import config from '../src/index.ts';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const categoryOptions: Record<string, string> = {
  allow: '-A',
  error: '-D',
  warn: '-W',
};

it('does not repeat category settings in rules at the same severity', () => {
  const arguments_ = Object.entries(config.categories ?? {}).flatMap(([category, severity]) => {
    const option = categoryOptions[severity];

    expect(option, `Unsupported category severity: ${severity}`).toBeDefined();

    return [option, category];
  });
  const result = spawnSync(
    'pnpm',
    ['exec', 'oxlint', '--disable-nested-config', ...arguments_, '--print-config', 'src/index.ts'],
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
  const duplicatedRules = Object.entries(config.rules ?? {})
    .filter(([rule, severity]) => categoryRules[rule] === categorySeverity[severity])
    .map(([rule]) => rule);

  expect(duplicatedRules).toEqual([]);
});
