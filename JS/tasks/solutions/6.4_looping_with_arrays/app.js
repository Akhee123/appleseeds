
const populations = [1439, 1380, 331, 273];
let worldPopulation = 7900;

function percentageOfWorld1(population){
    return (population / worldPopulation) * 100
}

function populationPercentages(){
    let percentages = [];

    for (let i = 0; i < populations.length; i++){
        percentages.push(percentageOfWorld1(populations[i]).toFixed(2));
    }

    return percentages;
}