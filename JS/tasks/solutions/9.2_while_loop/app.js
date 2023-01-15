
const populations = [1439, 1380, 331, 273];
let worldPopulation = 7900;

function percentageOfWorld1(population){
    return (population / worldPopulation) * 100
}

function populationPercentages(){
    let percentages = [];

    // for (let i = 0; i < populations.length; i++){
    //     percentages.push(percentageOfWorld1(populations[i]).toFixed(2));
    // }

    let i = 0;
    while(i < populations.length){
        percentages.push(percentageOfWorld1(populations[i]).toFixed(2));
        i++;
    }

    return percentages;
}

const result = populationPercentages();
console.log(result);
// it's easier to do this type of job using FOR loop.