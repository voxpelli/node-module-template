# Node Module Template

A GitHub template repo for node modules

<!--
[![npm version](https://img.shields.io/npm/v/@voxpelli/node-module-template.svg?style=flat)](https://www.npmjs.com/package/@voxpelli/node-module-template)
[![npm downloads](https://img.shields.io/npm/dm/@voxpelli/node-module-template.svg?style=flat)](https://www.npmjs.com/package/@voxpelli/node-module-template)
-->
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-7fffff?style=flat&labelColor=ff80ff)](https://github.com/neostandard/neostandard)
[![Module type: ESM](https://img.shields.io/badge/module%20type-esm-brightgreen)](https://github.com/voxpelli/badges-cjs-esm)
[![Types in JS](https://img.shields.io/badge/types_in_js-yes-brightgreen)](https://github.com/voxpelli/types-in-js)
[![Follow @voxpelli@mastodon.social](https://img.shields.io/mastodon/follow/109247025527949675?domain=https%3A%2F%2Fmastodon.social&style=social)](https://mastodon.social/@voxpelli)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/voxpelli/node-module-template)

## About This Template

This template is designed for **creating Node.js library modules** - packages that provide reusable functionality to other projects.

**When to use this template:**
- Building npm libraries and utilities
- Creating shared code modules
- Developing packages without CLI or server components

**Related templates:**
- **[node-cli-template](https://github.com/voxpelli/node-cli-template)** - For command-line tools and CLI applications
- **[node-app-template](https://github.com/voxpelli/node-app-template)** - For web servers, REST APIs, and long-running services

**For detailed coding guidelines and GitHub Copilot instructions**, see [`.github/copilot-instructions.md`](.github/copilot-instructions.md)

## Testing

This template uses two complementary test layers:

- **Runtime tests** in `test/*.spec.js` using `node:test` and `node:assert/strict`
- **Type-level tests** in `typetests/*.tst.ts` using `tstyche`

Useful commands:

- `npm test` – full verification flow
- `npm run test:node` – runtime tests with c8 coverage
- `npm run check-type-tests` – type-level contract tests

## Git Hooks

Husky is opt-in in this template.

- `npm run husky-enable` – enable git hooks
- `npm run husky-disable` – disable git hooks

## Lockfile Policy

This module template does not commit a lockfile by default (`package-lock=false` in `.npmrc`).

## Usage

```javascript
import { something } from '@voxpelli/node-module-template';

// Use that something
```

## API

### something()

Takes a value (`input`), does something configured by the config (`configParam`) and returns the processed value asyncly(`output`)

#### Syntax

```ts
something(input, [options]) => Promise<true>
```

#### Arguments

* `input` – _`string`_ – the input of the method
* `options` – _[`SomethingOptions`](#somethingoptions)_ – optional options

#### SomethingOptions

* `maxAge` – _`number`_ – the maximum age of latest release to include
* `minDownloadsLastMonth = 400` – _`number`_ – the minimum amount of downloads needed to be returned
* `skipPkg` – _`boolean`_ – when set skips resolving `package.json`

#### Returns

A `Promise` that resolves to `true`

## Used by

* [`example`](https://example.com/) – used by this one to do X and Y

## Similar modules

* [`example`](https://example.com/) – is similar in this way

## See also

* [Announcement blog post](#)
* [Announcement tweet](#)
