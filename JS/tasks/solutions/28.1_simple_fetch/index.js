
const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    fetch('https://api.jokes.one/jod')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        text.innerText = `${data.contents.jokes[0].joke.text}`
    });
});