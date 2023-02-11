
const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];

function printName() {
    console.log(`my name is ${this.name}`);
}

function printHeroes(heroes, printFunc) {
    //add your code here
    for (const iterator of heroes) {
        printFunc.call(iterator);
    }
}

printHeroes(superHeroes, printName);