
function grade(gradeNum){

    if (gradeNum >= 0 && gradeNum <= 64 ){
        return "F";
    }
    if (gradeNum >= 65 && gradeNum <= 69 ){
        return "D";
    }
    if (gradeNum >= 70 && gradeNum <= 79 ){
        return "C";
    }
    if (gradeNum >= 80 && gradeNum <= 89 ){
        return "B";
    }
    if (gradeNum >= 90 && gradeNum <= 100 ){
        return "A";
    }
    else{
        return "Invalid input";
    }
}