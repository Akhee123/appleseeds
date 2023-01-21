
function isIsogram(str) {
    let newStr = str.toLowerCase().split('').filter((element, index, self) =>(
        self.indexOf(element) == index
    )).join('');
    return str.length === newStr.length ? true : false;
}

// Test
console.log(isIsogram("halo"));