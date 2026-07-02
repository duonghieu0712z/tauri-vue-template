# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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

[unreleased]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v0.0.2...HEAD
[0.0.2]: https://github.com/duonghieu0712z/tauri-vue-template/compare/v0.0.1...v0.0.2
[0.0.1]: https://github.com/duonghieu0712z/tauri-vue-template/releases/tag/v0.0.1
