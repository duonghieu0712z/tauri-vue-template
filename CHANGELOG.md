# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.3] - 2026-08-13

### Changed

- Added explicit Rustfmt settings for consistent Rust 2024 formatting ([dbab683](https://github.com/duonghieu0712z/tauri-vue-template/commit/dbab6831727e74f36de7073107ad5caffe370f50)).
- Configured the Rust toolchain to use the minimal installation profile ([c1e759a](https://github.com/duonghieu0712z/tauri-vue-template/commit/c1e759a797021f08f769f7a016cf0cc41a03543b)).
- Enforced stricter Rust and Clippy linting and replaced panic-prone backend startup paths with explicit error handling ([8827824](https://github.com/duonghieu0712z/tauri-vue-template/commit/8827824166dcb550eb0ff870b06d12c0e08ab9e9)).
- Updated release-generated changelog links to use immutable commit or version references ([20fa9f0](https://github.com/duonghieu0712z/tauri-vue-template/commit/20fa9f0030db32ee212fa810063ef5b36ca20b24)).
- Excluded generated auto-import declarations from Oxlint and Oxfmt checks ([08ed99d](https://github.com/duonghieu0712z/tauri-vue-template/commit/08ed99d9ea1caf909b1c0d10f8b965f6fbe67d25)).
- Pinned pnpm 11.21.0 in the package metadata and configured GitHub Actions workflows to use that single version source ([d8eed5f](https://github.com/duonghieu0712z/tauri-vue-template/commit/d8eed5f2df276c4e209550742529c61f8bfe55d7), [e78feed](https://github.com/duonghieu0712z/tauri-vue-template/commit/e78feed843e14249bc91f626be4fb91294479c17)).

### Fixed

- Returned a non-zero exit code when the Tauri runtime fails to start ([90bd925](https://github.com/duonghieu0712z/tauri-vue-template/commit/90bd92513cf70e4b1533dc31978242f5ab01bf7b)).

## [1.0.2] - 2026-08-04

### Changed

- Extracted frontend and cross-platform Tauri checks into a reusable workflow and required release builds to pass them ([ddaad94](https://github.com/duonghieu0712z/tauri-vue-template/commit/ddaad94345c408f9a6fb4bc70d4cc324f9406a03)).
- Moved the version bump utility into the `scripts` directory ([7be383c](https://github.com/duonghieu0712z/tauri-vue-template/commit/7be383ce8a16eb54d3efdb10cd771746ddef47da)).
- Updated the release asset naming pattern to use the main binary name ([1e6ecd7](https://github.com/duonghieu0712z/tauri-vue-template/commit/1e6ecd71c1df619590e1f047546cb7f4e77cc302)).

## [1.0.1] - 2026-07-29

### Changed

- Updated Oxfmt to use the global Tailwind CSS stylesheet for class sorting and changed the font stylesheet import to a formatter-resolvable relative path ([130e68a](https://github.com/duonghieu0712z/tauri-vue-template/commit/130e68ad814afdb30713e461db7a787fe3c95ed3)).
- Updated global typography defaults and normalized native input appearance ([6828199](https://github.com/duonghieu0712z/tauri-vue-template/commit/6828199924a27384e3c3ddccfa4391f451cc0531)).

### Security

- Updated vulnerable transitive dependencies to patched versions ([b84dda2](https://github.com/duonghieu0712z/tauri-vue-template/commit/b84dda2ef0b2eead1c13e3d4e1143687fb83aa3c)).

## [1.0.0] - 2026-07-15

### Changed

- Marked the template as the first stable 1.0.0 release after validating the release packaging, quality workflows, versioning, changelog management, and dependency automation baseline.

## [0.1.3] - 2026-07-15

### Changed

- Updated the release workflow matrix to use `platform` for release asset naming.
- Updated the release workflow to build Intel macOS artifacts on the macOS 26 Intel runner.
- Updated the frontend quality workflow to run a production build check after type checking.
- Updated frontend and tooling dependencies to their latest compatible versions.
- Updated the lint-staged Rust formatter command to use the configured default Rust toolchain.

### Removed

- Removed the custom scrollbar utility from global styles.

## [0.1.2] - 2026-07-08

### Changed

- Updated the release workflow to read the `Unreleased` changelog section when creating manual release drafts.
- Updated release asset names to use product names and user-friendly platform labels.

## [0.1.1] - 2026-07-06

### Changed

- Standardized Rust quality checks on the shared stable toolchain configuration and moved Rust component requirements into `rust-toolchain.toml`.
- Updated the release workflow to use stable Tauri asset names and route manual release runs to the `unreleased` draft.

## [0.1.0] - 2026-07-02

### Changed

- Marked the template as the initial 0.1.0 baseline after stabilizing release packaging, quality workflows, versioning, changelog management, and dependency automation.

## [0.0.3] - 2026-07-02

### Changed

- Updated the release workflow to build macOS x86_64 artifacts on the Intel macOS runner.

### Removed

- Removed explicit macOS target arguments from the release workflow now that macOS builds run natively per runner architecture.

## [0.0.2] - 2026-07-02

### Added

- Added Commitlint configuration and a commit message hook for Conventional Commits validation.
- Added lint-staged and a pre-commit hook for staged frontend and Rust formatting checks.
- Added Dependabot auto-merge workflow for eligible non-major dependency update pull requests.
- Added Rust formatting configuration for the Tauri workspace.

### Changed

- Updated frontend linting, formatting, and type-check scripts to use the current Oxlint, ESLint, Oxfmt, and Vue TypeScript toolchain.
- Updated GitHub Actions quality checks to include commit message validation, frontend checks, and cross-platform Tauri Rust checks.
- Updated the release workflow to read the matching version entry from `CHANGELOG.md` when creating the draft GitHub Release body.
- Moved the version bump script from `scripts/bump-version.js` to `bump-version.js`.
- Updated README documentation to match the current development, quality, versioning, release, and dependency update workflows.
- Updated the project Node.js engine requirement to `>=22.12.0`.

### Removed

- Removed the app rename script and related script utilities.

## [0.0.1] - 2026-05-23

### Added

- Added the initial Tauri 2 desktop application template with Vue 3, TypeScript, Vite, and Tailwind CSS 4.
- Added shadcn-vue conventions, Lucide Vue, and shared UI utilities for application interface development.
- Added a Rust backend shell with Tauri command registration and generated Rust-to-TypeScript bindings through Specta.
- Added project scripts for development, production builds, app renaming, version bumping, linting, and formatting.
- Added GitHub Actions workflows for frontend quality checks, Rust formatting, Clippy checks, and cross-platform release builds.
- Added release packaging for macOS, Linux, and Windows through `tauri-apps/tauri-action`.

[unreleased]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v1.0.3...HEAD
[1.0.3]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v0.1.3...v1.0.0
[0.1.3]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v0.0.3...v0.1.0
[0.0.3]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/duonghieu0712z/tauri-vue-template/releases/tag/v0.0.1
