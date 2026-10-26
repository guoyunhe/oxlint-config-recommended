# oxlint-config-recommended

A recommended shareable configuration for [Oxlint](https://oxc.rs/docs/guide/usage/linter.html).

## Installation

```bash
pnpm add --save-dev oxlint-config-recommended oxlint
```

## Usage

Add the configuration to `oxlint.json` in your project root:

```json
{
  "extends": ["oxlint-config-recommended"]
}
```

## ESLint compatibility

This configuration is compatible with ESLint's built-in `recommended` rule
set: all supported rules from that set are enabled at error level. These
explicit severities take precedence over Oxlint's category levels, so an
ESLint recommended rule remains an error even if its Oxlint category is set to
warnings. Oxlint does not currently implement `no-dupe-args` or `no-octal`, so
those rules are omitted.

The configuration also reports Oxlint correctness issues as errors and warns
about suspicious code.

## License

[MPL-2.0](LICENSE)
