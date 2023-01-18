
const numbers = [1, -5, 666, 2, 400, 11];

const arrAsc = numbers.slice().sort((a ,b) => a - b);
console.log(arrAsc);

const arrDsc = numbers.slice().sort((a ,b) => b - a);
console.log(arrDsc);

