
const people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++){
    console.log(`${people[i]}`);
}

// Remove Greg
people.splice(people.indexOf("Greg"), 1);

// Remove James
people.splice(people.indexOf("James"), 1);

// Add Matt at the beginning
people.unshift("Matt");

// Add my name
people.push("Muhammad");

for (let i = 0; i < people.length; i++){
    console.log(`${people[i]}`);
    if (people[i] === "Mary"){
        break;
    }
}

let newPeople = people.slice(2);

console.log(people.indexOf("Mary"));

console.log(people.indexOf("Foo"));

people.splice(0, people.length);
people.splice(0, 0,"Greg", "Mary", "Devon", "James");
people.splice(people.indexOf("Devon"), 1, "Elizabeth", "Artie");
console.log(people);

const withBob = people.concat("Bob");
console.log(withBob);