
function shortestWord(str) {
    let arrStr = str.split(' ');
    let arrLengths = arrStr.reduce((arr, element)=>{
        arr.push(element.length);
        return arr;
    }, []);
    return Math.min(...arrLengths);
}

// Test
console.log(shortestWord("Hiiii Muhammad"));