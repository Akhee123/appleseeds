/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
expressions to IIFE functions.
* Please reformat the following function
declarations in two ways, explicit return and implicit
return functions.
Submit the file to Hive
*/// From function declarations to explicit and implicit return functions (one of each).
const welcome = () => {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
const power = (a) => (
    pow(a, 2)
)

// From function expressions to IIFE functions.
// const squareRoot = a => Math.sqrt(a);
(function (a){
    Math.sqrt(a);
})();

// const randomNumbers = (a, b) => Math.random() * (a - b) + b;

(function (a, b) {
    Math.random() * (a - b) + b;
})();