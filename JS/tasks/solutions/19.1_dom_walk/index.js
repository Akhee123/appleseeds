
const elementLi = document.querySelector('.start-here');

elementLi.innerText = "main title";

const innerUl = document.querySelector('ul ul');

const newLi = document.createElement('li');
newLi.innerText = 'subtitle 4';

innerUl.appendChild(newLi);

const itemToRemove = elementLi.nextElementSibling.nextElementSibling;
itemToRemove.remove();

const title = document.querySelector('title');
title.innerText = "Master Of The DOM";

const paragraph = document.querySelector('p');
paragraph.innerText = "This is a DOM task";
