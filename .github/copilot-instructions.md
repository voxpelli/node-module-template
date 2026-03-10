# GitHub Copilot Instructions for Node Module Template

## Related Templates (Choose the Right Template First)

This repository is a **GitHub Template Repo** for Node.js libraries. Before proceeding, confirm this is the right template for the project.

Consider these alternatives depending on your project type:

| If you are building… | Pick this template | Typical outcomes |
|---|---|---|
| Command-line tools, generators, build tooling | [`node-cli-template`](https://github.com/voxpelli/node-cli-template) | CLI apps, terminal workflows |
| Web APIs, GraphQL services, workers/daemons | [`node-app-template`](https://github.com/voxpelli/node-app-template) | Long-running services |
| Reusable libraries and shared utilities | [`node-module-template`](https://github.com/voxpelli/node-module-template) | npm modules, framework utilities |

Default agent behavior: when intent is ambiguous in this repo, proceed in **library mode** and ask clarifying questions only if strong CLI/service signals appear.

## Copilot Fast Path (Read First)

Use this file to optimize for safe, high-quality, low-friction contributions in this Node.js module template.

- Build for a **library package**, not a CLI or long-running app.
- Use **ESM only** (`import` / `export`) and follow neostandard style.
- Write JavaScript with **clear JSDoc types** so declarations can be generated and type-checked.
- Keep `index.js` minimal and focused on re-exports from `lib/`.
- Start with **local repository context first** (existing code + tests), then use MCP tools when external/current guidance is needed.
- Validate before finishing: run checks/tests (`npm test` or equivalent scoped checks).
- When behavior, scope, or risk is unclear, ask clarifying questions early instead of guessing.

## Priority Rules: MUST, SHOULD, ASK FIRST, NEVER

If rules conflict, follow `MUST` over `SHOULD`. If uncertainty remains, use `ask_questions` before making risky changes.

### MUST

- Use ESM syntax only; do not introduce CommonJS.
- Keep changes minimal, targeted, and consistent with existing file structure and style.
- Add or update tests when behavior changes.
- Validate changes with lint/type/test checks before finalizing.
- Prefer local patterns first; use MCP research for unknown APIs, external docs, and non-obvious decisions.

### SHOULD

- Prefer built-in Node.js APIs and avoid unnecessary dependencies.
- Keep functions small, explicit, and documented with JSDoc.
- Ask multiple focused MCP questions (2–4) rather than one broad question for unfamiliar domains.
- Explain non-obvious implementation choices briefly in comments or PR notes.

### ASK FIRST

- Adding or replacing runtime dependencies.
- Changing public API shape, exported names, or package entry points.
- Large refactors, file moves, or renames beyond the immediate task.
- Disabling checks, removing tests, or altering CI-related behavior.

### NEVER

- Mix module systems (`require` / `module.exports` in runtime code).
- Bypass failing checks silently or claim validation that was not run.
- Commit auto-generated declaration artifacts that repository policy says not to commit.
- Guess requirements when clarification can be obtained quickly.

## Overview

This repository is a **template for creating Node.js library modules** - packages that provide reusable functionality to other projects. It implements best practices for modern Node.js module development with TypeScript types in JavaScript, ESM modules, and comprehensive testing.

### When to Use This Template

Use this template when creating:
- **Libraries and utilities** that will be published to npm
- **Shared code modules** used across multiple projects
- **Packages with no CLI or server components**

### Project Snapshot (Architecture + Workflow)

- `index.js` re-exports from `lib/main.js`; keep entrypoint surface minimal.
- `lib/main.js` contains runtime implementation; `test/*.spec.js` validates behavior.
- `index.d.ts` and `lib/*-types.d.ts` define the type surface.
- Validation contract: run local checks/tests before commit, then rely on CI for lint + tests + TypeScript verification.

---

## MCP-Assisted Research Workflow for Copilot

Use MCP tools proactively to improve implementation quality and speed, especially when working with unfamiliar dependencies, protocols, or external systems.

### Working Pattern (Strong Advisory)

1. **Start local first**
   - Read relevant files and tests in this repository first.
   - Confirm existing patterns before introducing new approaches.

2. **Use MCP for uncertainty or external knowledge**
   - If the task depends on current docs, ecosystem practices, or repository-specific behavior not obvious from local code, default to MCP research before coding.
   - Ask multiple targeted questions (typically 2–4) instead of one broad question.

3. **Clarify ambiguities before implementation**
   - If requirements, scope, or expected behavior are unclear, use `ask_questions` early rather than guessing.

4. **Apply and verify**
   - Convert findings into concrete code and tests.
   - Validate with linting, type checks, and test runs.

### Tool Selection by Trigger

| Trigger | Prefer | Example Outcome | Provider |
|------|------|-----------------|
| Need current external facts or docs | `tavily_search` | Find authoritative and up-to-date references | Tavily MCP server |
| Need structured content from a specific URL | `tavily_extract` | Pull relevant sections from docs/pages for implementation details | Tavily MCP server |
| Need repository-specific architectural or usage guidance | `ask_question` | Get targeted answers grounded in a repository's docs/wiki | DeepWiki MCP server |
| Requirements or assumptions are ambiguous | `askQuestion` | Resolve uncertainty before making code changes | VSCode built in tool |

### Example MCP Usage Scenarios

| Scenario | Use this tool (or sequence) | Example prompt | What to do with result |
|---|---|---|---|
| Integrating a new library and you need current best practices | `tavily_search` | "Latest best practices for validating unknown JSON in Node.js ESM libraries" | Use results to select a validation approach and reflect it in code + tests |
| You already have official docs URL and need implementation details | `tavily_extract` | "Extract sections on authentication middleware options and error handling" | Translate extracted sections into concrete function signatures and edge-case tests |
| You need repository-specific guidance before using a dependency | `ask_question` | "In owner/repo, which helpers are recommended for nested object access and type guards?" | Prefer repository-recommended utilities over custom ad hoc implementations |
| Acceptance criteria are unclear before coding | `askQuestion` | "Should invalid input throw, return null, or return Result-style errors?" | Lock behavior expectations first, then implement to that contract |

### Question Quality Guidelines

Prefer specific, implementation-oriented questions.

- Better: "What are the recommended patterns for validating unknown JSON payloads in X?"
- Better: "What utility functions does X provide for nested object access, and when should each be used?"
- Better: "What are the safe type-guard patterns for Y in modern Node.js ESM projects?"
- Avoid: "How do I use X?"

### Suggested Research Cadence

When integrating a new dependency or protocol:

1. Ask 2–4 targeted questions with `mcp_deepwiki_ask_question` (or equivalent source-aware MCP tools).
2. Use `mcp_tavily_tavily_search` to validate recency and cross-check guidance.
3. Use `mcp_tavily_tavily_extract` for exact sections from canonical docs.
4. Implement with the discovered patterns, then verify through tests and checks.

### Anti-Patterns to Avoid

1. ❌ Skipping research when implementing unfamiliar APIs or protocols
2. ❌ Asking one broad question and coding from partial answers
3. ❌ Proceeding with unclear requirements instead of using `ask_questions`
4. ❌ Treating stale assumptions as facts without checking current documentation

### Tool Availability and Fallbacks

- Default to the MCP tools above when available in the execution environment.
- If a named MCP tool is unavailable, use the closest equivalent available tool path and continue with the same workflow.
- Keep behavior consistent: local context first, then targeted external research, then implementation and verification.

## Coding Guidelines for GitHub Copilot

### Code Style and Standards

1. **JavaScript Style**
   - Use ESM (ECMAScript Modules) syntax exclusively (`import`/`export`)
   - Follow [neostandard](https://github.com/neostandard/neostandard) JavaScript style guide
   - Use single quotes for strings
   - Include semicolons
   - 2-space indentation

2. **Type Safety**
   - Use TypeScript for type definitions but write JavaScript for implementation
   - Include JSDoc comments with type annotations
   - Maintain strict type coverage (>99%)
   - Generate `.d.ts` files from JSDoc annotations
   - Example:
     ```javascript
     /**
      * @param {string} input - The input value
      * @param {SomethingOptions} [options] - Optional configuration
      * @returns {Promise<boolean>}
      */
     export async function something(input, options) {
       // implementation
     }
     ```

3. **Module Structure**
   - Main entry point: `index.js` (exports from lib)
   - Implementation: `lib/*.js` files
   - Type definitions: `lib/*-types.d.ts` for complex types
   - Keep index.js minimal - just re-exports

4. **File Organization**
   ```
   /index.js              # Main entry, re-exports from lib
   /index.d.ts            # Generated type definitions
   /lib/main.js           # Core implementation
   /lib/advanced-types.d.ts  # Complex type definitions
   /test/*.spec.js        # Runtime tests (node:test)
   /typetests/*.tst.ts    # Type-level tests (tstyche)
   ```

### Testing

1. **Test Framework**
    - Use `node:test` for runtime test runner
    - Use `node:assert/strict` for runtime assertions
    - Use `tstyche` for type-level contract testing
   - Place tests in `test/` directory with `.spec.js` extension
    - Place type tests in `typetests/` with `.tst.ts` extension
   - Example:
     ```javascript
       import assert from 'node:assert/strict';
       import { describe, it } from 'node:test';

     describe('something()', () => {
       it('should return true', async () => {
         const result = await something('test');
             assert.strictEqual(result, true);
       });
     });
     ```

2. **Code Coverage**
   - Use c8 for coverage reporting
   - Aim for high coverage on new code
   - Coverage reports generated in LCOV and text formats

3. **Running Tests**
   - `npm test` - Full test suite with checks
   - `npm run test:node` - Runtime tests with c8 coverage
   - `npm run check:2` - Type-level tests via tstyche
   - `npm run check` - Linting and type checking only

### Building and Type Generation

1. **Build Process**
   - `npm run build` - Clean and generate type declarations
   - TypeScript compiler generates `.d.ts` files from JSDoc
   - Clean old declarations before building

2. **Type Configuration**
   - `tsconfig.json` - Main TypeScript config for type checking
   - `declaration.tsconfig.json` - Config for generating declarations
   - Commit hand-written type files (`lib/*-types.d.ts`, `index.d.ts`)
   - Don't commit auto-generated `.d.ts` files (generated from JSDoc)

### Dependencies

1. **Adding Dependencies**
   - Avoid adding dependencies unless absolutely necessary
   - Prefer modern Node.js built-in APIs
   - Production dependencies should be minimal
   - Use exact versions in package.json when possible

2. **Development Dependencies**
   - Keep devDependencies up to date via Renovate
   - Use `installed-check` to verify dependency hygiene
   - Use `knip` to detect unused dependencies

### Code Quality Tools

1. **ESLint**
   - Configuration: `eslint.config.js`
   - Based on `@voxpelli/eslint-config`
   - Run: `npm run check:lint`
   - Fix automatically when possible

2. **TypeScript Checking**
   - Run: `npm run check:tsc`
   - Ensures type correctness without compilation
   - Check type coverage: `npm run check:type-coverage`

3. **Knip**
   - Detects unused files, dependencies, and exports
   - Configuration: `.knip.jsonc`
   - Run: `npm run check:knip`

### Git and Version Control

1. **Commits**
   - Use conventional commit messages when appropriate
   - Husky pre-commit hooks will run checks
   - Keep commits focused and atomic

2. **Branching**
   - Main branch: `main`
   - Feature branches: descriptive names
   - CI runs on all pull requests

### Node.js Version Support

- Required versions: `^20.19.0 || ^22.13.0 || >=24`
- Target latest LTS versions
- Use modern JavaScript features available in these versions
- No transpilation needed

### Publishing (for reference)

- Package is published to npm
- `files` field in package.json controls what's published
- Include: `index.js`, `index.d.ts`, `lib/**/*.js`, `lib/**/*.d.ts`
- Exclude: tests, config files, source `.ts` files

### Special Notes

1. **This is a Template Repository**
   - This repo serves as a starting point for new modules
   - When using this template, update:
     - `package.json` (name, description, repository, keywords)
     - `README.md` (replace with actual project documentation)
     - Implementation in `lib/` directory
     - Tests in `test/` directory

2. **External Projects Using This Style**
   - Projects can reference these instructions to understand the coding style
   - This template demonstrates Node.js module best practices
   - See README for real-world usage examples

3. **Workflow Files**
   - `.github/workflows/lint.yml` - Linting checks
   - `.github/workflows/nodejs.yml` - Test suite on multiple Node versions
   - `.github/workflows/ts-internal.yml` - TypeScript internal checks
   - `.github/workflows/dependency-review.yml` - Dependency security

### Common Commands

```bash
# Install dependencies
npm install

# Run all checks and tests
npm test

# Run only linting
npm run check:lint

# Run only tests
npm run test:node

# Run type-level tests
npm run check:2

# Build type declarations
npm run build

# Clean generated files
npm run clean
```

### Anti-Patterns to Avoid

1. ❌ Don't use CommonJS (`require`/`module.exports`)
2. ❌ Don't add unnecessary dependencies
3. ❌ Don't skip type annotations in JSDoc
4. ❌ Don't commit auto-generated `.d.ts` files (only commit hand-written ones)
5. ❌ Don't use `any` types without good reason
6. ❌ Don't skip tests for new functionality
7. ❌ Don't mix module systems

### Best Practices

1. ✅ Write clear JSDoc comments with types
2. ✅ Export everything through index.js
3. ✅ Keep functions small and focused
4. ✅ Use async/await for asynchronous operations
5. ✅ Validate inputs and provide helpful error messages
6. ✅ Write tests that are clear and maintainable
7. ✅ Follow the existing code style consistently

---

## Quick Reference for External Projects

If your project wants to follow the voxpelli Node.js module style:

1. **Template Choice**: Start with the appropriate template
   - Libraries → `node-module-template`
   - CLIs → `node-cli-template`
   - Services → `node-app-template`

2. **Key Characteristics**:
   - ESM modules only
   - Types in JavaScript (JSDoc + TypeScript)
   - Neostandard code style
   - node:test + node:assert/strict + tstyche testing
   - Strict type coverage
   - Minimal dependencies

3. **Reference Documentation**:
   - This file: Coding guidelines and standards
   - README.md: Project-specific usage
   - package.json: Available scripts and commands

4. **Getting Started**:
   ```bash
   # Use this template
   npx degit voxpelli/node-module-template my-module
   cd my-module
   npm install
   npm test
   ```
