

const data = fetch('https://api.github.com/users/akhee123').then((data) => (data.json())).then((data) => {console.log(data);});