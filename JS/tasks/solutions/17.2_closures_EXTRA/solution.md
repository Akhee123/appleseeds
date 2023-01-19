# 17.2 Closures Extra

## Block 1

~~~javascript
(function immediateA(a) {
return (function immediateB(b) {
console.log(a);
})(1);
})(0)
~~~

The program outputs 0. The inner function ```immediateB``` passes the value passed to the outer function ```immediateA``` to the console which is 0 in this case, and it can do that due to the closure property of Javascript.

## Block 2

~~~javascript
let count = 0;
(function immediate() {
if (count === 0) {
let count = 1;
console.log(count);
}
console.log(count);
})();
~~~

The program outputs 1 and 0. At the beginning, ```count``` is declared and initialized to 0. Then the function ```immediate``` is executed. Inside that function, the value of ```count``` is checked and according to that, it's declared again using ```let``` which limits it to the scope of the if-statement. After that, it's called inside the block of the statement using ```console.log()``` which would output 1 to the console. But after the program reaches the second ```console.log()```, it'd be out of the if-statement and output ```count``` that's defined in the glbal scope.

## Block 3

~~~javascript
var module = (function () {
var foo = 'foo'
function addToFoo (bam) {
foo = bam;
return foo;
}
var publicInterface = {
bar: function () {
return 'bar';
},
bam: function () {
return addToFoo('bam')
}
}
return publicInterface
})()
console.log(module.bar())
console.log(module.bam())
~~~

The program outputs bar and bam. It creates an object with two properties ```bar``` and ```bam``` where bam is also connected to the function ```addToFoo``` inside the closure of ```module```. So, when ```console.log(module.bar())``` is executed, it outputs ```bar``` through the function ```bar``` inside ```module``` and when ```console.log(module.bam())``` is executed, function ```bam``` is called which calls function ```addToFoo``` and passes ```'bam'``` to it, and in the end it results in outputting ```bam```.
