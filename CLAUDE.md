# CLAUDE.md — Node Module Template

## Template Selection

This repo is a template for **Node.js library modules**. Pick the right starting point:

| Building… | Template |
|---|---|
| Reusable npm library / shared utility | **node-module-template** (this repo) |
| CLI tool, generator, build tooling | [node-cli-template](https://github.com/voxpelli/node-cli-template) — adds `bin` entry, arg parsing (`peowly`), exit-code error classes |
| Web API, service, long-running worker | [node-app-template](https://github.com/voxpelli/node-app-template) — full app scaffold, no `exports`/`files` publishing setup |

When intent is ambiguous, default to **library mode**. Use `AskUserQuestion` only if strong CLI or service signals appear.

---

## Project Overview

- **Type**: ESM-only library (no CLI, no server)
- **Style**: [neostandard](https://github.com/neostandard/neostandard) — single quotes, semicolons, 2-space indent
- **Types**: JSDoc annotations in `.js` files; TypeScript generates `.d.ts` declarations
- **Testing**: Mocha + Chai, `test/*.spec.js`, coverage via c8 (>99% type coverage)
- **Node**: `^20.15.0 || >=22.2.0`

File layout:
```
index.js              # Re-exports from lib/ only — keep minimal
lib/main.js           # Core implementation
lib/*-types.d.ts      # Hand-written type definitions (commit these)
index.d.ts            # Hand-written root types (commit this)
test/*.spec.js        # Mocha test files
```

Auto-generated `.d.ts` files (from JSDoc via `tsc`) are **not** committed.

---

## Priority Rules

### MUST
- Use ESM syntax only (`import`/`export`) — no CommonJS.
- Keep changes minimal and consistent with existing style.
- Add or update tests when behavior changes.
- Run checks before finishing (`npm test` or scoped checks).
- Read relevant files and tests locally before making changes.

### SHOULD
- Prefer built-in Node.js APIs; avoid adding dependencies.
- Keep functions small, explicit, and annotated with JSDoc types.
- Ask 2–4 targeted research questions rather than one broad one.
- Briefly comment non-obvious implementation choices.

### ASK FIRST
- Adding or replacing runtime dependencies.
- Changing public API shape, exported names, or package entry points.
- Large refactors, file moves, or renames beyond the immediate task.
- Disabling checks, removing tests, or altering CI behavior.

### NEVER
- Mix module systems (`require`/`module.exports` in runtime code).
- Commit auto-generated declaration artifacts.
- Claim validation was run without actually running it.
- Guess requirements when `AskUserQuestion` can resolve them quickly.

---

## Research Workflow

1. **Read local code first** — use `Read`, `Grep`, `Glob` to understand existing patterns.
2. **Use external tools for unknowns**:

   | Need | Tool |
   |---|---|
   | Current docs / ecosystem practices | `WebSearch` |
   | Specific sections from a known URL | `WebFetch` |
   | Repo-specific architecture guidance | `mcp__DeepWiki__ask_question` |
   | Ambiguous requirements | `AskUserQuestion` |

3. **Implement and verify** — run lint, type checks, and tests.

Ask specific, implementation-oriented questions (e.g. "What are safe type-guard patterns for X in ESM?"), not broad ones ("How do I use X?").

---

## Common Commands

```bash
npm test               # Full suite: checks + tests
npm run test:mocha     # Tests only (Mocha)
npm run check          # Lint + type checks only
npm run check:lint     # ESLint only
npm run check:tsc      # TypeScript type check only
npm run build          # Generate .d.ts declarations
npm run clean          # Remove generated declaration files
```

---

## Anti-Patterns

- Don't use `require`/`module.exports` anywhere in runtime code.
- Don't skip JSDoc type annotations on exported functions.
- Don't commit auto-generated `.d.ts` files (only `index.d.ts` and `lib/*-types.d.ts`).
- Don't add dependencies without checking if a Node.js built-in covers the need.
- Don't use `any` types without strong justification.
- Don't skip tests for new or changed behavior.
