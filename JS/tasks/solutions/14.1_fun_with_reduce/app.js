const arr = [10, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.reduce((acc, num) => (Math.max(acc, num))));

console.log(arr.reduce((acc, num) => (num % 2 === 0 ? acc + num : acc + 0), 0));

console.log(arr.reduce((acc, num) => (acc + num)) / arr.length);