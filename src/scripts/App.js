import { table } from '../assets/data.js';
    
const ul = document.createElement('ol');
ul.setAttribute('class','periodic-table');
document.querySelector('main').appendChild(ul);
table.forEach(renderPeriodicTable);

function renderPeriodicTable(element) {
    let li = document.createElement('li');
    let abbr = document.createElement('abbr');
    abbr.setAttribute('title', `${element.name}`);
    abbr.innerHTML = `${element.symbol}`;
    let elName = `${element.name}`;
    let atomicMass = Math.floor(`${element.atomic_mass}`);
    li.setAttribute('class', `${element.name}`);
    ul.appendChild(li);
    li.appendChild(abbr);
    li.innerHTML =`${li.innerHTML}${` `}${elName}${` `}${atomicMass}`;
    
}

