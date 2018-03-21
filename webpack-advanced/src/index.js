import sortBy from 'lodash.sortby';
import data from './data';
import { createCell, createRow, createHeaderRow } from './table-functions';
import './styles/styles.css';

const headerTitles = ['Navn', 'Antal', 'Pris'];
const root = document.createElement('div');
const table = document.createElement('table');

function sortData(key) {
    const sortedData = sortBy(data, key);
    populateTable(sortedData);
}

function populateTable(stuff) {
    table.innerHTML = '';
    table.appendChild(createHeaderRow(headerTitles, sortData));
    stuff.forEach(entry => {
        table.appendChild(createRow(entry));
    });    
}

populateTable(data);
root.appendChild(table);
document.body.appendChild(root);