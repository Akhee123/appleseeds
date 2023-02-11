
const makeAllCaps = function (arr) {
    return new Promise((resolve, reject) =>{
        if(arr.every((element) => typeof element === "string")){
            resolve(arr.map((element) => element.toUpperCase()));
        }
        else{
            reject("Not an array of strings");
        }
    })
}

const sortWords = function (arr) {
    return new Promise((resolve, reject) => {
        resolve(arr.sort());
    })
}

// Test
const arr1 = ['muhammad', 'yishai', 'watermelon'];
const arr2 = ['ahmad', 2 , 'melon'];

makeAllCaps(arr1)
    .then((result) => sortWords(result))
    .then((result) =>{console.log(result);})
    .catch((message) => {console.log(message);})

makeAllCaps(arr2)
    .then((result) => sortWords(result))
    .then((result) =>{console.log(result);})
    .catch((message) => {console.log(message);})
