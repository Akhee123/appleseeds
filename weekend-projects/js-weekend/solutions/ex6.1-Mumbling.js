
function mumbling(str) {
    let returnArr = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0){
                returnArr.push(str[i].toUpperCase());
            }
            else {
                returnArr.push(str[i].toLowerCase());
            }
        }
        if (i < str.length-1){
            returnArr.push('-');
        }
    }
    return returnArr.join('');
}

// Test
console.log(mumbling("cwAt"));