
let john = [89, 120, 103];
let mike = [116, 94, 123];
let mary = [97, 134, 105];

let sumJohn = john.reduce(function (x, y) {
    return x + y;
}, 0);

let sumMike = mike.reduce(function (x, y) {
    return x + y;
}, 0);

let sumMary = mary.reduce(function (x, y) {
    return x + y;
}, 0);

let avgJohn = sumJohn / john.length;
let avgMike = sumMike / mike.length;
let avgMary = sumMary / mary.length;

if (avgJohn > avgMike){
    console.log(`John wins with an average of ${avgJohn}`);
}
else if (avgMike > avgJohn){
    console.log(`Mike wins with an average of ${avgMike}`);
}
else{
    console.log(`It's a draw`);
}