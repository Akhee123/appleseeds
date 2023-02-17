import data from "./data.js";

const names = data.map((element => element.name));

const filteredByYear = data.filter( element => Number(element.birthday.slice(-4) < 1990));

export {names, filteredByYear}