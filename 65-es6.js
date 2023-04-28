/* Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements */

const average = (arr) => {
    const squaredArray = [];
    let sum = 0;
    let average;
    for (const element of arr) {
        let squaredElement = Math.pow(element, 2);
        squaredArray.push(squaredElement);
    }
    for (const squareElement of squaredArray) {
        sum = sum + squareElement; 
        average = sum / squaredArray.length;
    }
    return average;
}
console.log(average([2, 4, 5]));