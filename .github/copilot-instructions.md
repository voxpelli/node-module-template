# GitHub Copilot Instructions for Node Module Template

## Related Templates (Choose the Right Template First)

This repository is a **GitHub Template Repo** for reusable Node.js modules.

| If you are building… | Pick this template |
|---|---|
| Reusable libraries published for import | [`node-module-template`](https://github.com/voxpelli/node-module-template) |
| Command-line tools and terminal workflows | [`node-cli-template`](https://github.com/voxpelli/node-cli-template) |
| Web APIs, workers, long-running services | [`node-app-template`](https://github.com/voxpelli/node-app-template) |

Default behavior in this repo: proceed in **library mode**.

## Fast Path

- Use **ESM only** (`import` / `export`)
- Keep public API small and explicit through `index.js`
- Keep implementation in `lib/`
- Write runtime tests in `test/*.spec.js` with `node:test` + `node:assert/strict`
- Write type tests in `typetests/*.tst.ts` with `tstyche`
- Validate with `npm test` before finalizing

## Commands

- `npm run build` - clean and generate declaration output
- `npm run test:node` - runtime tests with coverage
- `npm run check-type-tests` - type-level tests
- `npm test` - full checks + tests

## Guardrails

### MUST

- Preserve public import surface and types unless intentionally changed
- Keep changes minimal and template-focused
- Keep docs aligned with actual scripts

### ASK FIRST

- Runtime dependency changes
- Public API shape changes
- Large file moves or broad refactors

### NEVER

- Introduce CommonJS runtime code
- Claim validation without running it
- Leave template docs with stale commands
