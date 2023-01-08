function countryInfo(country, population, capitalCity)
{
    return `${country} has ${population} people and its capital is ${capitalCity}`;
}

let japan = countryInfo("Japan", "125.7 million", "Tokyo");
let germany = countryInfo("Germany", "83.2 million", "Berlin");
let usa = countryInfo("USA", "331.9 million", "Washington DC");

console.log(japan);
console.log(germany);
console.log(usa);