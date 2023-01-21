
function longest(str1, str2) {
    let strComb = (str1 + str2).split('');
    return strComb.filter((element, index) =>(
        strComb.indexOf(element) == index
    )).sort().join('');
}

// Test
console.log(longest("xyaabbbcccdefww", "xxxxyyyyabklmopq"));