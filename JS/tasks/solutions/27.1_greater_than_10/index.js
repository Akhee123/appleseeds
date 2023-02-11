
const greaterThanTen = function (number) {
    return new Promise((resolve, reject) =>{
        if (number > 10) {
            resolve();
        }
        else{
            reject();
        }
    })
}

greaterThanTen(9)
    .then(() =>{
    console.log("Greater Than 10");
    })
    .catch(() =>{
        console.log("Less Than 10");
    });