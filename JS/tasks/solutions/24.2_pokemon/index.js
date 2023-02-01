
function Pokemon(pokemonName, pokemonType,
    pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon = function () {
    console.log(`I choose you, ${this.name}`);
}

Pokemon.prototype.attack = function (attackNumber) {
    console.log(`${this.name} used ${this.attackList[attackNumber]}`);
}

let pokemon1 = new Pokemon('Pikachu', 'electric', ['kick', 'punch', 'tail attack']);
let pokemon2 = new Pokemon('Watermelon', 'fruity', ['throw', 'sweet attack', 'JUMP']);

console.log(pokemon1.callPokemon());
console.log(pokemon2.callPokemon());

console.log(pokemon1.attack(1));
console.log(pokemon2.attack(1));