
function swap(obj) {
    const returnObj = {};
    for (const key in obj) {
        returnObj[obj[key]] = key;
    }
    return returnObj;
}

console.log(swap({a:1, b:2, c:3, d:4}));