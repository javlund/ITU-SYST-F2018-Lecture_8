import data from './data';
import { createCell, createRow, createHeaderRow } from './table-functions';

const headerTitles = ['Navn', 'Antal', 'Pris'];
const root = document.createElement('div');
const table = document.createElement('table');
table.appendChild(createHeaderRow(headerTitles));
data.forEach(entry => {
    table.appendChild(createRow(entry));
});
root.appendChild(table);
document.body.appendChild(root);