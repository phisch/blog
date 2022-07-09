import { version } from '../package.json';

export default function () {
  console.log('version ' + version);
}

/*
import ImageCompare from "./node_modules/image-compare-viewer/image-compare-viewer";

const viewers = document.querySelectorAll(".image-compare");
  
viewers.forEach((element) => {
  let view = new ImageCompare(element).mount();
});
*/

/*
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

function dateFromISO8601(iso) {
    var parts = iso.match(/\d+/g);
    return new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
}

function replaceDatesWithRelativeTimes() {
    var units = {
        year  : 24 * 60 * 60 * 1000 * 365,
        month : 24 * 60 * 60 * 1000 * 365/12,
        day   : 24 * 60 * 60 * 1000,
        hour  : 60 * 60 * 1000,
        minute: 60 * 1000,
        second: 1000
    }
    
    var getRelativeTime = (d1, d2 = new Date()) => {
        var elapsed = d1 - d2
        for (var u in units) {
            if (Math.abs(elapsed) > units[u] || u == 'second') {
                return new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
                    .format(Math.round(elapsed/units[u]), u)
            }
        }
    }
    var dateTags = document.querySelectorAll('[data-date]');

    dateTags.forEach(dateTag => {
        dateTag.textContent = getRelativeTime(
            dateFromISO8601(
                dateTag.getAttribute('data-date')
            )
        );
    });
}

document.addEventListener('DOMContentLoaded', event => {
    setCodeBlockLanguageAttributes();
    createHeadingAnchors();
    replaceDatesWithRelativeTimes();
});

*/