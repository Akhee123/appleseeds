/*--Delete the wrong answers--
1. Which of the following is/are strings?
a) 4
b) 4.0
c) '4'
->c

2. Which of the following is/are numbers?
a) 4
b) 4.0
c) '4'
d) -4
->a b d

3. Which of the following is/are booleans?
a) true
b) false
c) "true"
->a b

4. What is the result of 80 + 71.2?
a) 151.2
b) 151
c) 8071.2
->a

5. What is the result of "80" + 71.2?
a) 151.2
b) 151
c) "8071.2"
->c

6. Does 100 + 30 produce a number or a string?
a) number
b)string
->a

7. Does "100" + 30 produce a number or a string?
a)number
b)string
b
*/
//------Submit your answers under the question------//
//create three different ways to declare variables
let a = null;
var b = null;
const c = null;

//declare a variable and reassign a value to it
let d = 1;
d =2;

//create a variable and after that assign a string with its value being: He's got it!
let e;
e ="He's got it!";

/*
1. create a variable and assign a value on how
much a restaurant bill is.
2. create a variable and assign a value on how
much tax they should pay.
3. create a variable that will calculate the bill
* tax and its output would be: Your total bill is
<total bill> $.
*/
let bill = 20;
let tax = 1.17;
let totalBill = `Your total bill is ${bill * tax}`;

// Round the number 50.6 to its nearest integer
Math.round(50.6);

//Create a variable that is undefine
let variable = undefined;
