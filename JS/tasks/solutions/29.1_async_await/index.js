
async function getIDs() {
    await new Promise((resolve, reject) => (setTimeout(resolve, 1500)));
    return [532, 543, 753, 1, 5];
}

getIDs().then((data) => { console.log(data); })

// const getIDs = () =>
//     new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve([532, 543, 753, 1, 5]);
//         }, 1500);
//     });

// getIDs().then((data) => {console.log(data);})

async function getRecipe(recipeID) {
    const recipe = {};
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            recipe.title = "Fresh tomato pasta";
            recipe.publisher = "Pinchas Hodadad";
        }, 1500)
    });
    return `${recipeID}: ${recipe.title}`;
}

// const getRecipe = (recipeID) => {
//     return new Promise((resolve, reject) => {
//         setTimeout((ID) => {
//             const recipe = {
//                 title: "Fresh tomato pasta",
//                 publisher: "Pinchas Hodadad",
//             };
//             resolve(`${ID}: ${recipe.title}`);
//         }, 1500, recipeID);
//     });
// };

const res1 = await getIDs();
const res2 = await getRecipe(res1);

// getIDs()
//     .then((IDs) => {
//         console.log(IDs);
//         return getRecipe(IDs[2]);
//     }).then((recipe) => {
//         console.log(recipe);
//     }).catch((error) => {
//         console.log("It is an error!");
//     });