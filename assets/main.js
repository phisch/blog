function setCodeBlockLanguageAttributes() {
    const prefix = "language-";
    document.querySelectorAll(`div.highlighter-rouge[class^=${prefix}]`).forEach(
        codeBlock => codeBlock.classList.forEach(_class => {
            if (result = _class.match(`^${prefix}([a-z]+)$`)) {
                codeBlock.setAttribute('language', result[1]);
            }
        })
    );
}

function createHeadingAnchors() {
    document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(element => {
        if(element.matches('body > main > *')) {
            let token = element.textContent.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/[ ]/g, '-');
            element.id = token;
            let link = document.createElement("a");
            link.href = `#${token}`;
            link.classList.add('anchor');
            element.append(link);
        }
    });
}

document.addEventListener('DOMContentLoaded', event => {
    setCodeBlockLanguageAttributes();
    createHeadingAnchors();
});