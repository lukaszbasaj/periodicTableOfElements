import { table } from '../assets/data.js';
    
const ul = document.createElement('ol');
ul.setAttribute('class','periodic-table');
document.querySelector('main').appendChild(ul);
table.forEach(renderPeriodicTable);

function renderPeriodicTable(element) {
    const li = document.createElement('li');
    const abbr = document.createElement('abbr');
    const sub = document.createElement('sub');
    abbr.setAttribute('title', `${element.name}`);
    abbr.innerHTML = `${element.symbol}`;
    const elName = `${element.name}`;
    const atomicMass = Math.floor(`${element.atomic_mass}`, -1);
    const subValue = `${atomicMass}`;
    li.setAttribute('class', `${element.name}${` `}${element.category}`);
    ul.appendChild(li);
    li.appendChild(abbr);
    li.innerHTML =`${li.innerHTML}${` `}${elName}`;
    li.appendChild(sub).innerHTML = `${subValue}`;
}

