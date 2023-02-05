# 24.1 Who Is Stronger

~~~javascript
const hero = {
    health: 5,
    power: 68,
    getStrength: function(){
    if (this.health <= 5){
    return this.power - 10;
    } else return this.power;
    }
    }
    function whoIsStronger(getStrength){
    const myStrength = 82;
    if (getStrength() < myStrength){
    return "I am stronger";
    } else return "You are stronger";
    }
    whoIsStronger(hero.getStrength);
~~~

The code returns ```"You are stronger"```, even though logically it should return ```"I am stronger"``` and that's because the function ```whoIsStronger``` takes a function from ```hero``` object which relies on the property ```power``` inside it. So, when it's called from the global scope, it looks for that property there and doesn't find it; it's ```undefined```.
To fix the problem, the function ```getStrength``` should be bound to the object ```hero``` when passed to function ```whoIsStronger```. So, the last line of the code would be ```whoIsStronger(hero.getStrength.bind(hero));```.