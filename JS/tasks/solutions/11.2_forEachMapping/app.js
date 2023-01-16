
function doubleValues(arr){
    return arr.map(n => (
        n * 2
    ));
}

function onlyEvenValues(arr){
    return arr.map(n => {
        if (n % 2 === 0){
            return n;
        }
    });
}

function showFirstAndLast(arr){
    let temp = [];
    if (typeof arr[0] === 'string'){
        temp.push(arr[0]);
    }
    if (typeof arr[arr.length - 1] === 'string'){
        temp.push(arr[arr.length - 1]);
    }
    return temp;
}

function vowelCount(str){
    const obj = {};
    if (str.match(/[aA]/gi).length){
        obj.a = str.match(/[aA]/gi).length;
    }
    if (str.match(/[eE]/gi).length){
        obj.e = str.match(/[eE]/gi).length;
    }
    if (str.match(/[iI]/gi).length){
        obj.i = str.match(/[iI]/gi).length;
    }
    if (str.match(/[oO]/gi).length){
        obj.o = str.match(/[oO]/gi).length;
    }
    if (str.match(/[uU]/gi).length){
        obj.u = str.match(/[uU]/gi).length;
    }
    return obj;
}

function capitalize(str){
    return str.toUpperCase();
}

function shiftLetters(str){
    
}