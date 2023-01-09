
let numOfSiblings = prompt("How many siblings do you have?");

if (numOfSiblings == 1){
    console.log("1 sibling");
}
else if (numOfSiblings > 1){
    console.log("More than 1 sibling");
}
else{
    console.log("No soblings");
}

if (numOfSiblings === 1){
    console.log("1 sibling");
}
else if (numOfSiblings > 1){
    console.log("More than 1 sibling");
}
else{
    console.log("No soblings");
}

numOfSiblings = parseInt(numOfSiblings);
if (numOfSiblings == 1){
    console.log("1 sibling");
}
else if (numOfSiblings > 1){
    console.log("More than 1 sibling");
}
else{
    console.log("No soblings");
}

// The prompt() method returns the input as a string, so conversion if the comaprison is done against a number