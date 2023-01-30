
const table = document.getElementById('multi');
let output = '';

let rows = Number(prompt("Enter Number of rows"));
let columns = Number(prompt("Enter Number of columns"));

for (let i = 1; i <= rows; i++) {
    output += '<tr>';
    for (let j = 1; j <= columns; j++) {
        if (i == 1 && j == 1) {
            output += '<th>&#215;</th>';
        }
        else {
            if (i == 1 || j == 1) {
                output += '<th>' + i * j + '</th>';
            }
            else {
                output += '<td>' + i * j + '</td>';
            }
        }
    }
    output += '</tr>'
}

table.innerHTML = output;