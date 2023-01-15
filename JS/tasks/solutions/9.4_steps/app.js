
let test = 5;

function printSteps(n){
    let steps = [];
    for (let i = 1; i <= n; i++){
        for (let j = 1; j < n; j++){
            if (j <= i){
                steps.push("#");
            }
            else {
                steps.push(" ");
            }
        }
        console.log(steps.join(""));
        steps = [];
    }
}

printSteps(test);