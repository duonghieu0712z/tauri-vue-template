# Tauri Vue Template

A compact desktop application template built with Tauri 2, Vue 3, TypeScript, Vite, Tailwind CSS 4, shadcn-vue conventions, generated Rust-to-TypeScript bindings, and automated GitHub workflows for quality checks and release packaging.

## Stack

This template keeps the project setup focused on the pieces that typically need application-level wiring.

- [Tauri 2](https://tauri.app/) and [Rust](https://www.rust-lang.org/) for the desktop shell and backend commands
- [Vue 3](https://vuejs.org/), [TypeScript](https://www.typescriptlang.org/), and [Vite](https://vite.dev/) for the frontend
- [Tailwind CSS 4](https://tailwindcss.com/), [shadcn-vue](https://www.shadcn-vue.com/) conventions, and [Lucide Vue](https://lucide.dev/) for UI development
- [Specta](https://github.com/specta-rs/specta) and [tauri-specta](https://github.com/oscartbeaumont/tauri-specta) for generated Rust-to-TypeScript bindings
- [Oxlint](https://oxc.rs/docs/guide/usage/linter.html), [ESLint](https://eslint.org/), and [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html) for frontend linting and formatting
- [Husky](https://typicode.github.io/husky/), [lint-staged](https://github.com/lint-staged/lint-staged), and [Commitlint](https://commitlint.js.org/) for local Git quality gates

## Prerequisites

Install Node.js, pnpm, Rust, and the Tauri system dependencies for your operating system. The package is configured for Node.js `>=22.12.0`; the GitHub workflows currently use Node.js 24 and pnpm 11.

On Ubuntu or Debian, install the Tauri Linux dependencies:

```bash
sudo apt-get update
sudo apt-get install -y libwebkit2gtk-4.1-dev libappindicator3-dev librsvg2-dev patchelf
```

## Development

Install dependencies:

```bash
pnpm install
```

Run the desktop app in development mode:

```bash
pnpm start
```

Run the frontend-only Vite dev server:

```bash
pnpm dev
```

Preview a production frontend build:

```bash
pnpm build
pnpm preview
```

## Build

Build the full Tauri desktop app locally:

```bash
pnpm make
```

The generated installers and bundles are written under `src-tauri/target/release/bundle/`.

## Quality Checks

Check formatting, linting, and TypeScript types before opening a pull request:

```bash
pnpm format
pnpm lint
pnpm type-check
```

Apply automatic formatting and lint fixes:

```bash
pnpm format:fix
pnpm lint:fix
```

Local Git hooks run `lint-staged` before commits and validate commit messages with Commitlint. Commit messages are expected to follow the Conventional Commits format.

## Rust and TypeScript Bridge

Backend commands live in `src-tauri/src/command/` and are registered through `tauri-specta`. During debug builds, Specta exports TypeScript bindings to `src/generated/bindings.ts`, allowing frontend code to call backend commands with generated types instead of manually duplicated contracts.

The generated bindings file is intentionally excluded from staged formatting and linting in `lint-staged.config.js`.

## Versioning

Bump the app version with:

```bash
pnpm bump 0.1.0
```

The version script updates `package.json`, `src-tauri/tauri.conf.json`, and `src-tauri/Cargo.toml`.

Update `CHANGELOG.md` in the same change. The changelog follows [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) and uses semantic version headings.

## Release

The release workflow runs from the `release` branch or through manual dispatch. It reads the matching version section from `CHANGELOG.md`, builds macOS, Linux, and Windows bundles with `tauri-apps/tauri-action`, and creates a draft GitHub Release with the generated installers attached.

The release action uses the version from `package.json` when the workflow is triggered from a non-version branch. Keep the package version, Tauri version, Cargo version, and changelog entry aligned before releasing.

## Dependency Updates

Dependabot checks npm, Cargo, and GitHub Actions dependencies every Monday. Minor and patch dependency updates are grouped where supported, and non-major Dependabot pull requests are approved and configured for squash auto-merge by the repository workflow.
