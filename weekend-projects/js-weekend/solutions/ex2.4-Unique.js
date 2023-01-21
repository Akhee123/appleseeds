

function findUniq(arr){
    const count = {};
    arr.forEach((element) => {
        count[element] = (count[element] || 0) + 1;
    });

    for (const key in count) {
        if (count[key] === 1) {
            return key;
        }
    }

    return;
}

// Test
console.log(findUniq([1,1,1,13,1]));