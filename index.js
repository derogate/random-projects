

function generateLinks() {
    const linksContainer = document.querySelector('#links');
    if (!linksContainer) return;
    console.log([linksContainer]);

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