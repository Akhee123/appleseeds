
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countTheLetters(arr){
    const arrLetters = arr.join('').toLowerCase();
    const lettersObj = {};
    for (let i = 0; i < arrLetters.length; i++) {
        const element = arrLetters[i];
        if (!lettersObj[element]){
            lettersObj[element] = 0;
        }
        lettersObj[element]++;
    }
    return lettersObj;
}

console.log(countTheLetters(array));