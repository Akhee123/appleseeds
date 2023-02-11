
const obj = {
    name: 'Adam',
    printName: function () {
        console.log(this.name);
    },
    printNameDelay: function () {
        setTimeout(this.printName.bind(obj), 1000);
    },
}

obj.printName();
obj.printNameDelay();
