import fs from 'node:fs';

const repositoryName = process.env.RepositoryName ?? '';

const findEntryHtmlFilesRecursive = () => {
    const htmlFilesPath = [];
    const items = fs.readdirSync("files", { withFileTypes: true, recursive: true })
    for (const item of items) {
        if (item && !item.isDirectory() && item.name === 'index.html') {
            htmlFilesPath.push({
                href: `${repoName}/${item.path}/${item.name}`,
                folder: item.path.split('/')[1]
            })
        }
    }

    return htmlFilesPath;
}

const json = JSON.stringify({
    process,
    repositoryName,
    entryPointsHtml: findEntryHtmlFilesRecursive()
}, undefined, 4)
console.log(json)

fs.writeFile('entry-point.json', json, { flag: 'w+' }, err => {
    console.log('generate-entry-point.js Error:', err)
});