
function toCamelCase(str) {
    let CamelCase =  [];
    for (let i = 0; i < str.length; i++) {
        if (i == 0){
            CamelCase.push(str[i]);
            continue;
        }
        else if (str[i] == '-' || str[i] == '_'){
            continue;
        }
        else if (str[i - 1] == '-' || str[i - 1] == '_'){
            CamelCase.push(str[i].toUpperCase());
            continue
        }
        else{
            CamelCase.push(str[i]);
        }
    }
    return CamelCase.join('');
}

// Test
console.log(toCamelCase('The_Stealth_Warrior'));