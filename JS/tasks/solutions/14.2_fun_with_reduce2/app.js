
function extractOnlyValue(arrOfObjects, key) {
    return arrOfObjects.reduce((returnArr, obj) => {
        returnArr.push(obj[key]);
        return returnArr;
    }, []);
};

function countOnlyVowels(str) {
    return str.toLowerCase().split("").reduce((vowels, letter) => {
        if (letter == 'a' ||
            letter == 'e' ||
            letter == 'i' ||
            letter == 'o' ||
            letter == 'u'
        ) {
            vowels[letter] = (vowels[letter] || 0) + 1;
        }
        return vowels;
    }, {});
};

function addKeyAndValue(obj, key, val){
    return obj.reduce((objArr, currentObj) => {
        let tempObj = currentObj;
        tempObj[key] = val;
        objArr.push(tempObj);
        return objArr;
    }, []);
}