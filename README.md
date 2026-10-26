# oxlint-config-recommended

A recommended shareable configuration for [Oxlint](https://oxc.rs/docs/guide/usage/linter.html).

It enables Oxlint's `correctness` category as errors and `suspicious` category
as warnings, while covering Oxlint-supported rules from ESLint's built-in
`recommended` set, `eslint-plugin-unicorn`'s `recommended` config, and
`typescript-eslint`'s `recommended` config.

## Installation

```bash
pnpm add --save-dev oxlint-config-recommended oxlint
```

## Configuration formats

### JSON or JSONC

Add this to `.oxlintrc.json` or `.oxlintrc.jsonc` in your project root:

```jsonc
{
  "extends": ["oxlint-config-recommended"]
}
```

### `oxlint.config.ts`

Import this package's config object and extend it directly:

```ts
import { defineConfig } from 'oxlint';
import recommended from 'oxlint-config-recommended';

export default defineConfig({
  extends: [recommended],
});
```

JavaScript and TypeScript config files (including `oxlint.config.js`) are
experimental in Oxlint and require running Oxlint through Node.js.

### React and JSX

Extend the React and JSX accessibility recommended rules with
`oxlint-config-recommended/react`:

```jsonc
{
  "extends": [
    "oxlint-config-recommended",
    "oxlint-config-recommended/react"
  ]
}
```

This enables the supported recommended rules from `eslint-plugin-react` and
`eslint-plugin-jsx-a11y`. The React config intentionally includes only those
plugin rules that Oxlint supports.

## Recommended rule compatibility

The supported ESLint, Unicorn, and TypeScript recommended rules remain errors
even when their Oxlint category is set to warnings. Oxlint does not currently
implement ESLint's `no-dupe-args` or `no-octal`, so those rules are omitted.

## License

[MPL-2.0](LICENSE)
