import sortImage from './images/icon_sort.svg';

function createImage(fieldName, sorter) {
    const image = document.createElement('img');
    image.setAttribute('src', sortImage);
    image.addEventListener('click', () => sorter(fieldName.toLowerCase()));
    return image;
}

function createCell(content) {
    const cell = document.createElement('td');
    cell.innerHTML = content;
    return cell;
}

function createRow(rowData) {
    const row = document.createElement('tr');
    row.appendChild(createCell(rowData.navn));
    row.appendChild(createCell(rowData.antal));
    row.appendChild(createCell(rowData.pris));
    return row;
}

function createHeaderRow(titles, sortFunction) {
    const row = document.createElement('tr');
    titles.forEach(title => {
        const cell = document.createElement('th');
        cell.innerHTML = title + ' ';
        const image = createImage(title, sortFunction);
        cell.appendChild(image);
        row.appendChild(cell);
    });
    return row;
}

export {
    createCell,
    createRow,
    createHeaderRow
};