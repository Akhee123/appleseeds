
let worldPopulation = 7900;

// Using Function Declaration
function percentageOfWorld1(population){
    return (population / worldPopulation) * 100
}

let ChinaPop1 = percentageOfWorld1(1439);
let IndiaPop1 = percentageOfWorld1(1380);
let USAPop1   = percentageOfWorld1(331);

console.log(`China's Population is ${ChinaPop1.toFixed(2)}% of world's population`);
console.log(`India's Population is ${IndiaPop1.toFixed(2)}% of world's population`);
console.log(`USA's Population is ${USAPop1.toFixed(2)}% of world's population`);

// Using Function expresstion
let percentageOfWorld2 = population =>(
    (population / worldPopulation) * 100
)

let ChinaPop2 = percentageOfWorld2(1439);
let IndiaPop2 = percentageOfWorld2(1380);
let USAPop2   = percentageOfWorld2(331);

console.log(`China's Population is ${ChinaPop2.toFixed(2)}% of world's population`);
console.log(`India's Population is ${IndiaPop2.toFixed(2)}% of world's population`);
console.log(`USA's Population is ${USAPop2.toFixed(2)}% of world's population`);
