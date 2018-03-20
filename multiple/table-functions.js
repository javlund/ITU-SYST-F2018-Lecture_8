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