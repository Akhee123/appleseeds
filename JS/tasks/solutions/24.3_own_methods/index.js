
// Filter
Array.prototype.myFilter = function(checkFunc){
    const returnArr = [];
    for (const element of this) {
        if (checkFunc(element)){
            returnArr.push(element);
        }
    }
    return returnArr;
};

// Test
console.log([1,2,3,4,5,6].myFilter(x => (x % 2 == 0)));


// Find
Array.prototype.myFind = function(checkFunc){
    for (const element of this) {
        if(checkFunc(element)){
            return element;
        }
    }
}

// Test
console.log([1,2,3,4,5,6].myFind(x => (x % 2 == 0)));

// Reduce
Array.prototype.myReduce = function(func, initialValue){
    let accum = (initialValue === undefined) ? this[0] : initialValue;
    let begin = (initialValue === undefined) ? 1 : 0;
    for (let i = 0; i < this.length; i++) {
        accum = func(accum, this[i]);
    }
    return accum;
}

// Test
console.log([1,2,3,4,5,6].myReduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0));