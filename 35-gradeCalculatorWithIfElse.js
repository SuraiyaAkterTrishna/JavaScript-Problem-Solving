function gradeCalculator(number){
    if(number > 80){
        return "You got A+";
    }
    else if(number > 70){
        return "You got A";
    }
    else if(number > 60){
        return "You got A-";
    }
    else if(number > 50){
        return "You got B";
    }
    else if(number > 40) {
        return "You got C";
    }
    else if(number > 33) {
        return "You got D";
    }
    else{
        return "Oops! You are fail.."
    }  
}
const myNumber = 70; 
const myGrade = gradeCalculator(myNumber);
console.log(myGrade);