
function countryToLiveIn(language, island, population, country) {

    let criteriaLanguage = "English";
    let criteriaIsland = true;
    let criteriaPopulation = 50;
    if (island === criteriaIsland && language === criteriaLanguage && population === criteriaPopulation) {
        console.log(`You should live in ${country}`);
    }
    else {
        console.log(`${country} does not meet your criterai`);
    }
}