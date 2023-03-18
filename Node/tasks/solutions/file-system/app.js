
const fs = require('fs');

fs.writeFileSync('test.txt', 'This is a test file!'); //Create
fs.copyFileSync('test.txt', 'copy.txt'); // Copy
fs.renameSync('copy.txt', 'rename.txt'); // Rename

console.log(fs.readdirSync('./')); // List content of dir


// My Method

function myMethod() {
    
}