
function nb_year (p0, percent, aug, p) {
    let population = p0;
    let year;
    for (let i = 1; population <= p; i++) {
        population += population * percent / 100 + aug;
        year = i;
    }
    return year;
}

// Test
console.log(nb_year (1500000, 2.5, 10000, 2000000));