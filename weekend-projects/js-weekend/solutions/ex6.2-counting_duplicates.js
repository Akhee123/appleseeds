
function countDuplicants(str) {
    let arrStr = str.split('');
    const dups = arrStr.reduce((letters, currentLetter) => {
        letters[currentLetter] = (letters[currentLetter] || 0) + 1;
        return letters;
    }, {})

    let count = 0;
    for (const key in dups) {
        if (dups[key] > 1) {
            count++;
        }
    }
    return count;
}

// Test
console.log(countDuplicants("aabbcde"));