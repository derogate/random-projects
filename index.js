(async function () {
    const linksContainer = document.querySelector('#links');
    const script = document.querySelector('script');
    if (!linksContainer || !script) return;
    let links = [];

    try {
        const response = await fetch('./entry-point.json');
        const { entryPointsHtml } = await response.json();
        links.push(...entryPointsHtml);
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
    script.remove();
}());