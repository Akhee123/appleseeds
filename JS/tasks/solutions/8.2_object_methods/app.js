
const myCountry = {
    country: "USA",
    capital: "Washington",
    language: "English",
    population: 337,
    neighbors: ["Mexico", "Canada"],
    island : false,
    describe() {
        console.log(`${this.country} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighboring countries and a capital called ${this.capital}`);
    },
    checkIsland() {
        return this.neighbors.length > 0 ? myCountry.island = flase : myCountry.island = true;
    },
}

myCountry.describe();
console.log(myCountry.island);
