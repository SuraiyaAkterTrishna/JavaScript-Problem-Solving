// average mark 
function averageMark (assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const assignmentMark1 = 60; 
const assignmentMark2 = 55; 
const assignmentMark3 = 50; 

const myAverageMark = averageMark(assignmentMark1, assignmentMark2, assignmentMark3);
console.log(myAverageMark);