
function darkOrLight(color){
    switch(color){

        case "yellow":
        case "pink":
        case "orange":
            console.log("Light Color");
            break;
        
        case "blue":
        case "purple":
        case "brown":
            console.log("Dark Color");
            break;
        
        default:
            console.log("Unknown color");
    }
}