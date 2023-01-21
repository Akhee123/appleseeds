
function peopleOnBus(stopArr) {
    let passangers = 0;
    for (let i = 0; i < stopArr.length; i++) {
        passangers += stopArr[i][0] - stopArr[i][1];
    }
    return passangers;
}

// Test
console.log(peopleOnBus([[50, 0],[10, 30],[20, 15]]));