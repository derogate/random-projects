import endpoints from "./endpoints.js";

const generateLinks = async () => {
    const linksContainer = document.querySelector('#links');
    if (!linksContainer) return;
    console.log([linksContainer]);
    const response = await fetch(endpoints.FILE_DIR);
    console.log(response, await response.json())

    const unorderedList = document.createElement('ul');
    for (let i = 0; i < 10; i++) {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', i);
        link.innerText = `Open Folder #${i}`;
        if (i === 9) {
            link.setAttribute('href', 'files/counter/index.html');
            link.innerText = `Open files/counter/index.html`;
        }

        listItem.append(link);
        unorderedList.append(listItem);
    }
    linksContainer.append(unorderedList);
}

generateLinks();