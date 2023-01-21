
function longestWords(str) {
    let arrStr = str.split(' ').sort((a, b) => {
        return b.length - a.length;
    });
    return arrStr.filter(word => word.length === arrStr[0].length);
}

// Test
console.log(longestWords("Hi this is a test"));