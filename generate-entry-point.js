import fs from 'node:fs';

const findEntryHtmlFilesRecursive = () => {
    const htmlFilesPath = [];
    const items = fs.readdirSync("files", { withFileTypes: true, recursive: true })
    for (const item of items) {
        if (item && !item.isDirectory() && item.name === 'index.html') {
            htmlFilesPath.push({
                href: `/${item.path}/${item.name}`,
                folder: item.path.split('/')[1]
            })
        }
    }

    return htmlFilesPath.length > 0 ? JSON.stringify(htmlFilesPath) : htmlFilesPath;
}

const htmlJson = findEntryHtmlFilesRecursive();
fs.writeFile('entry-point.json', htmlJson, { flag: 'w+' }, err => {
    console.log('generate-entry-point.js Error:', err)
});