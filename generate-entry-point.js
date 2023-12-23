import fs from 'node:fs';

const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY ?? '';
const GITHUB_REPOSITORY_NO_USER = GITHUB_REPOSITORY.split('/').reverse()[0];

const findEntryHtmlFilesRecursive = () => {
    const htmlFilesPath = [];
    const items = fs.readdirSync("files", { withFileTypes: true, recursive: true })
    for (const item of items) {
        if (item && !item.isDirectory() && item.name === 'index.html') {
            htmlFilesPath.push({
                href: `${GITHUB_REPOSITORY_NO_USER}/${item.path}/${item.name}`,
                folder: item.path.split('/')[1]
            })
        }
    }

    return htmlFilesPath;
}

const json = JSON.stringify({
    GITHUB_REPOSITORY,
    GITHUB_REPOSITORY_NO_USER,
    env: process.env,
    entryPointsHtml: findEntryHtmlFilesRecursive()
}, undefined, 4)
console.log(json)

fs.writeFile('entry-point.json', json, { flag: 'w+' }, err => {
    console.log('generate-entry-point.js Error:', err)
});