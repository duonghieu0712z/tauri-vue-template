#!/usr/bin/env node

import { readFile } from 'node:fs/promises';

import { parseOptions, readJson, updateFile } from './utils.js';

function parseArgs() {
    const options = parseOptions(process.argv.slice(2));

    if (!options.name || !options.id) {
        throw new Error('Usage: node scripts/rename-app.js --name "App Name" --id "com.example.app"');
    }

    return options;
}

function toKebabCase(value) {
    return value
        .trim()
        .replace(/['"]/g, '')
        .replace(/[^a-zA-Z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .toLowerCase();
}

function toSnakeCase(value) {
    return toKebabCase(value).replaceAll('-', '_');
}

async function readCurrent() {
    const packageJson = await readJson('package.json');
    const tauriConfig = await readJson('src-tauri/tauri.conf.json');
    const cargoToml = await readFile('src-tauri/Cargo.toml', 'utf8');

    const crateName = cargoToml.match(/^name = "([^"]+)"/m)?.[1];
    const crateLibName = cargoToml.match(/^\[lib\]\s+[\s\S]*?^name = "([^"]+)"/m)?.[1];

    if (!crateName || !crateLibName) {
        throw new Error('Could not read current Cargo package or lib name');
    }

    return {
        appId: tauriConfig.identifier,
        appName: tauriConfig.productName,
        crateLibName,
        crateName,
        packageName: packageJson.name,
    };
}

async function main() {
    const options = parseArgs();
    const current = await readCurrent();
    const appName = options.name.trim();
    const appId = options.id.trim();
    const packageName = options.package?.trim() || toKebabCase(appName);
    const crateName = toKebabCase(packageName);
    const crateLibName = `${toSnakeCase(crateName)}_lib`;

    const replacements = [
        [current.appName, appName],
        [current.appId, appId],
        [current.packageName, packageName],
        [current.crateName, crateName],
        [current.crateLibName, crateLibName],
    ];

    await updateFile('package.json', replacements);
    await updateFile('index.html', replacements);
    await updateFile('src/App.vue', replacements);
    await updateFile('src-tauri/tauri.conf.json', replacements);
    await updateFile('src-tauri/Cargo.toml', replacements);
    await updateFile('src-tauri/src/main.rs', replacements);
    await updateFile('src-tauri/src/lib.rs', replacements);
}

try {
    await main();
} catch (error) {
    console.error(error.message);
    process.exit(1);
}
