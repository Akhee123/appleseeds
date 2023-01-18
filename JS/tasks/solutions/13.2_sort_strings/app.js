
const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const foodsAsc = foods.slice().sort();
console.log(foodsAsc);

const foodsDsc = foods.slice().sort((a, b) => (a > b ? -1 : 1));
console.log(foodsDsc);

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
    ];

const foodsWithUpperCaseAsc = foodsWithUpperCase.slice().sort();
console.log(foodsWithUpperCaseAsc);

const foodsWithUpperCaseDsc = foodsWithUpperCase.slice().sort((a, b) => (a > b ? -1 : 1));
console.log(foodsWithUpperCaseDsc);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];
words.sort((a, b) => (a.length > b.length ? -1 : 1));
console.log(words);