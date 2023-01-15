

function outputString(str){
    console.log(str);
}

function isString(str, func){
    if (typeof str === "string"){
        func(str);
    }
}

function creatDash(str){
    return str.join('-');
}

function firstWordUpperCase(str, func){
    const arrSentence = str.split(" ");
    arrSentence[0] = arrSentence[0].toUpperCase();
    return func(arrSentence);
}

const str = "This is a test string";

console.log(firstWordUpperCase(str, creatDash));