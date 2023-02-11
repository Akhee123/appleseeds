
const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', fetchJoke);

async function fetchJoke() {
    const api = await fetch('https://api.jokes.one/jod');
    const data = await api.json();
    console.log(data);
    text.innerText = `${data.contents.jokes[0].joke.text}`;
}