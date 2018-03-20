const root = document.createElement('div');
const table = document.createElement('table');
data.forEach(entry => {
    table.appendChild(createRow(entry));
});
root.appendChild(table);
document.body.appendChild(root);