
function abbreviateTwoWords(str) {
    let newArr = str.split(' ');
    return newArr[0][0] + '.' + newArr[1][0];
}

// Test
console.log(abbreviateTwoWords("Sam Harris"));