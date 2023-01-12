
const arr = [3, 3, 4, 4, 5, 5];

function removeDuplicates(arr) {
    return arr.filter((item, 
        index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));
