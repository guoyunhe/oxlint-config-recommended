# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Adds `oxlint-config-recommended/react` with Oxlint-supported recommended rules
  from `eslint-plugin-react` and `eslint-plugin-jsx-a11y`.

## [1.0.0] - 2026-10-26

### Added

- Adds recommended-rule coverage for all rules supported by Oxlint from
  ESLint's built-in `recommended` set. Unsupported `no-dupe-args` and
  `no-octal` are omitted.
- Adds recommended-rule coverage for all rules supported by Oxlint from
  `eslint-plugin-unicorn`'s `recommended` config.
- Adds recommended-rule coverage for all rules supported by Oxlint from
  `typescript-eslint`'s `recommended` config.
