
// Array to hold days of the week
const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Array to hold months
let months = ["January","February","March","April","May","June","July", "August","September","October","November","December"];

// Creating date object 
const date = new Date();

//Getting day, weekday, month and year
const [weekday, month, day, year] = [
    date.getDay(),
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  console.log(`Today is ${weekdays[weekday]} the ${day} of ${months[month]} ${year}`);
