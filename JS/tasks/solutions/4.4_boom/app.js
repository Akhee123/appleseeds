
function boom(n) {
    if (n.toString().includes('7')) {
        console.log("BOOM-BOOM!");
    }
    else if (n % 7 === 0) {
        console.log("BOOM!");
    }
    else {
        console.log(n);
    }
}