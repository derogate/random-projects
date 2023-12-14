import endpoints from "./endpoints.js";

(async function () {
    const linksContainer = document.querySelector('#links');
    if (!linksContainer) return;
    let links = [];

    try {
        const response = await fetch(endpoints.FILE_DIR_ENTRY_HTML);
        const json = await response.json();
        links.push(...json);
    } catch (err) {
        console.log(err)
    }
    if (links.length === 0) return;

    const unorderedList = document.createElement('ul');
    links.forEach(link => {
        const listItem = document.createElement('li');
        const anchorTag = document.createElement('a');
        anchorTag.setAttribute('href', link.href);
        anchorTag.innerText = link.folder;
        listItem.append(anchorTag);
        unorderedList.append(listItem);
    })
    linksContainer.append(unorderedList);
}());