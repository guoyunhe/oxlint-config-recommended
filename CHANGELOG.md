# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Compatibility with ESLint's built-in `recommended` rule set for all rules
  supported by Oxlint. Unsupported `no-dupe-args` and `no-octal` are omitted.
- Overrides all `eslint-plugin-unicorn` recommended rules supported by Oxlint
  to error severity.
