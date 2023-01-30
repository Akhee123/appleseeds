
const form = document.getElementById('form');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userAge = document.getElementById('age');

const userData = {};

for (let input of [userName, userEmail, userAge]) {
    input.addEventListener('input', (event) => {
        userData[event.target.name] = event.target.value;
    })
}

form.addEventListener('submit', (event) =>{
    if (confirm(`Name: ${userData.name}\nEmail: ${userData.email}\nAge: ${userData.age}\nConfirm Info?`)){
        alert("Congratulations! You seccessfully sent the form")
    }
    event.preventDefault();
});