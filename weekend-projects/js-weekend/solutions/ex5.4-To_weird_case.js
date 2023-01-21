
function toWeirdCase(str) {
    let arrStr = str.split('');
    let returnArr = [];
    let spaceIndicator = 0;
    for (let i = 0; i < arrStr.length; i++) {
        if (spaceIndicator % 2 === 0){
            returnArr.push(arrStr[i].toUpperCase());
        }
        else {
            returnArr.push(arrStr[i].toLowerCase());
        }

        if (arrStr[i] == ' '){
            spaceIndicator = 0;
            continue;
        }
        spaceIndicator++;
    }
    return returnArr.join('');
}

// Test
 console.log(toWeirdCase("Weird string case"));