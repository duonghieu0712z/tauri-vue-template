#!/usr/bin/env node

import { readJson, updateFile } from './utils.js';

function parseArgs() {
    const args = process.argv.slice(2).filter((arg) => arg !== '--');
    if (args.length !== 1 || args[0].startsWith('--')) {
        throw new Error('Usage: node scripts/bump-version.js VERSION');
    }

    return {
        version: args[0],
    };
}

async function readCurrent() {
    const packageJson = await readJson('package.json');

    return {
        version: packageJson.version,
    };
}

async function main() {
    const options = parseArgs();
    const current = await readCurrent();
    const replacements = [[current.version, options.version]];

    await updateFile('package.json', replacements);
    await updateFile('src-tauri/tauri.conf.json', replacements);
    await updateFile('src-tauri/Cargo.toml', replacements);
}

try {
    await main();
} catch (error) {
    console.error(error.message);
    process.exit(1);
}
