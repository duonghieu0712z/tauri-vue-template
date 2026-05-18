import { readFile, writeFile } from 'node:fs/promises';

export function parseOptions(args) {
    const options = {};

    for (let index = 0; index < args.length; index += 1) {
        const arg = args[index];
        if (!arg.startsWith('--')) {
            throw new Error(`Unexpected argument: ${arg}`);
        }

        const key = arg.slice(2);
        const value = args[index + 1];
        if (!value || value.startsWith('--')) {
            throw new Error(`Missing value for --${key}`);
        }

        options[key] = value;
        index += 1;
    }

    return options;
}

export function replaceAll(content, replacements) {
    return replacements.reduce(
        (updatedContent, [search, replacement]) => updatedContent.replaceAll(search, replacement),
        content,
    );
}

export async function readJson(path) {
    return JSON.parse(await readFile(path, 'utf8'));
}

export async function updateFile(path, replacements) {
    const content = await readFile(path, 'utf8');
    const updatedContent = replaceAll(content, replacements);
    await writeFile(path, updatedContent);
    console.log(`Updated ${path}`);
}
