
const arr = [];
console.log(arr.fill(5));

const rangeArr = Array.from({ length: 100 }, (v, i) => i + 1);
console.log(rangeArr);

const obj = {one : 1, two : 2, three : 3};
const objValues = Object.keys(obj).map(function(k){return obj[k]});
console.log(objValues);

const obj2 = {...objValues};
console.log(obj2);

console.log(Array.isArray(objValues));

const arrCopy = [...objValues];
console.log(arrCopy);