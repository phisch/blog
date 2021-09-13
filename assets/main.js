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

document.addEventListener('DOMContentLoaded', event => {
    setCodeBlockLanguageAttributes();
});