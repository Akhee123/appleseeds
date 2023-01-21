
function tribonacci(signatureArr, n) {
    let tribonacciArr = [];
    if (n <= 0) {
        return tribonacciArr;
    }

    tribonacciArr = signatureArr;

    for (let i = 3; i < n; i++) {
        tribonacciArr.push(tribonacciArr[i - 3] + tribonacciArr[i - 2] + tribonacciArr[i - 1]);
    }
    
    return tribonacciArr;
}

// Test
console.log(tribonacci([0, 0, 1], 8));