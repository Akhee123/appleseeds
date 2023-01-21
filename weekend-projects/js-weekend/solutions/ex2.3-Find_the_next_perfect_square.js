
function nextPerfectSquare(number){
    return Math.sqrt(number) % 1  > 0 ? -1 : Math.pow(Math.sqrt(number) + 1, 2);
}

// Test
console.log(nextPerfectSquare(114));
console.log(nextPerfectSquare(121));
