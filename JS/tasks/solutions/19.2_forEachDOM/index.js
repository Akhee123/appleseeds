
const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const ol = document.createElement('ol');
ol.style.listStyleType = "none";

users.forEach((element, index) =>{
    const li = document.createElement('li');
    li.setAttribute("data-id", element.id);
    li.innerText = element.firstName + ' ' + element.lastName;
    ol.appendChild(li);
});

document.querySelector('body').appendChild(ol);