function gradeCalculator(mark){
    let grade;
    switch(true) {
        case (mark >= 80):
            grade = 'Your grade is A+';
            break;
        case (mark >= 70):
            grade = 'Your grade is A';
            break;
        case (mark >= 60):
            grade = 'Your grade is A-';
            break;
        case (mark >= 50):
            grade = 'Your grade is B';
            break;
        case (mark >= 40):
            grade = 'Your grade is C';
            break;
        case (mark >= 33):
            grade = 'Your grade is D';
            break;
        default: 
            return 'Do not try to cross the road';
    }
    return grade;
}
const myMark = 75; 
const myGrade = gradeCalculator(myMark);
console.log(myGrade);
