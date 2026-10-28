# oxlint-config-recommended

[![npm downloads](https://badgen.net/npm/dm/oxlint-config-recommended)](https://www.npmjs.com/package/oxlint-config-recommended)
[![GitHub stars](https://badgen.net/github/stars/guoyunhe/oxlint-config-recommended)](https://github.com/guoyunhe/oxlint-config-recommended)

A recommended shareable configuration for [Oxlint](https://oxc.rs/docs/guide/usage/linter.html).

It enables Oxlint's `correctness` category as errors and `suspicious` category
as warnings, while covering Oxlint-supported rules from ESLint's built-in
`recommended` set, `eslint-plugin-unicorn`'s `recommended` config, and
`typescript-eslint`'s `recommended` config.

## Installation

```bash
pnpm add --save-dev oxlint-config-recommended oxlint
```

## Configuration

### Basic

**JSON or JSONC**

Add this to `.oxlintrc.json` or `.oxlintrc.jsonc` to enable the base config:

```jsonc
{
  "extends": ["oxlint-config-recommended"]
}
```

**JavaScript/TypeScript**

In `oxlint.config.ts` (or `oxlint.config.js`), import the base config and add
it to the `extends` array:

```ts
import { defineConfig } from 'oxlint';
import recommended from 'oxlint-config-recommended';

export default defineConfig({
  extends: [recommended],
});
```

JavaScript and TypeScript config files (including `oxlint.config.js`) are
experimental in Oxlint and require running Oxlint through Node.js.

### React

**JSON or JSONC**

Add this to `.oxlintrc.json` or `.oxlintrc.jsonc` to enable the React config:

```jsonc
{
  "extends": ["oxlint-config-recommended", "oxlint-config-recommended/react"]
}
```

This enables the supported recommended rules from `eslint-plugin-react`.

**JavaScript/TypeScript**

In `oxlint.config.ts` (or `oxlint.config.js`), import the base and React
configs and add them to the `extends` array:

```ts
import { defineConfig } from 'oxlint';
import recommended from 'oxlint-config-recommended';
import recommendedReact from 'oxlint-config-recommended/react';

export default defineConfig({
  extends: [recommended, recommendedReact],
});
```

### JSX accessibility

**JSON or JSONC**

Add this to `.oxlintrc.json` or `.oxlintrc.jsonc` to enable the JSX
accessibility config:

```jsonc
{
  "extends": ["oxlint-config-recommended", "oxlint-config-recommended/jsx-a11y"]
}
```

This enables the supported recommended rules from `eslint-plugin-jsx-a11y`.

**JavaScript/TypeScript**

In `oxlint.config.ts` (or `oxlint.config.js`), import the base and JSX
accessibility configs and add them to the `extends` array:

```ts
import { defineConfig } from 'oxlint';
import recommended from 'oxlint-config-recommended';
import recommendedJsxA11y from 'oxlint-config-recommended/jsx-a11y';

export default defineConfig({
  extends: [recommended, recommendedJsxA11y],
});
```

### Unicorn

The base configuration includes the recommended Unicorn rules. To use these
rules separately:

Add this to `.oxlintrc.json` or `.oxlintrc.jsonc` to enable the Unicorn config:

```jsonc
{
  "extends": ["oxlint-config-recommended/unicorn"]
}
```

Or in `oxlint.config.ts` (or `oxlint.config.js`), import the Unicorn config and
add it to the `extends` array:

```ts
import { defineConfig } from 'oxlint';
import recommendedUnicorn from 'oxlint-config-recommended/unicorn';

export default defineConfig({
  extends: [recommendedUnicorn],
});
```

## Recommended rule compatibility

The supported ESLint, Unicorn, and TypeScript recommended rules remain errors
even when their Oxlint category is set to warnings. Oxlint does not currently
implement ESLint's `no-dupe-args` or `no-octal`, so those rules are omitted.

## License

[MPL-2.0](LICENSE)
