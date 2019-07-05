import { table } from '../assets/data.js';

(function() {
        const ol = document.createElement('ol');
        ol.setAttribute('class', 'periodic-table');
        document.querySelector('main').appendChild(ol);
        table.forEach(renderPeriodicTable);

        function renderPeriodicTable(element) {
            const li = document.createElement('li');
            const dl = document.createElement('dl');
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            const abbr = document.createElement('abbr');
            const sub = document.createElement('sub');
            const atomicMass = Math.floor(`${element.atomic_mass}`);
            const elName = `${li.innerHTML}${element.symbol}`;
            abbr.setAttribute('title', `${element.name}`);
            abbr.innerHTML = `${element.symbol}`;
            li.setAttribute('class', `element ${element.name.toLowerCase()}${` `}phase__${element.phase.toLowerCase()}${` `}${element.category}`);
        ol.appendChild(li);
        li.appendChild(dl);
        dl.appendChild(dt);
        dt.appendChild(abbr).innerHTML = `${elName}`;
        dl.appendChild(dd).innerHTML = `${element.summary}`;
        dl.appendChild(sub).innerHTML = `${atomicMass}`;
    }
})();