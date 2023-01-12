
const book = {
    name: "coding",
    author: "Muhammad",
    publishYear: 2000,
    Country: "USA"
     };

function printBook (obj){
    console.log(`The book ${obj.name} was written by ${obj.author} in the year ${obj.year} for the region of ${obj.Country}`);
}

printBook(book);