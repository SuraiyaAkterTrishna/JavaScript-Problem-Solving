// addition
function add(a, b) {
    const sum = a + b;
    return sum;
}
// subtraction
function sub(a, b) {
    const sub = a - b;
    return sub; 
}
// multiplication
function mult(a, b) {
    const mult = a * b; 
    return mult; 
}
// division
function div(a, b) {
    const div = a / b;
    return div; 
}
const a = 50; 
const b = 20; 

const summation = add(a, b);
const subtraction = sub(a, b);
const multiplication = mult(a, b);
const division = div(a, b); 

console.log("Addition is:", summation, "Subtraction is: ", subtraction, "Multiplication is: ", multiplication, "division is: ", division);