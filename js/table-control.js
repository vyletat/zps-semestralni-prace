/**
 * prida prazdy radek na konec v tabulce
 */
function addRow() {
    var tr = document.createElement('tr');
    for (let index = 0; index < 6; index++) {
        tr.append(document.createElement('td'));
    }
    $('#employe-table').append(tr);
}

/**
 * odebere posledni radek v tabulce
 */
function removeLastRow() {
    $('#employe-table tr:last').remove();
}