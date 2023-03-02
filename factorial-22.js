// factorial of a number using for loop
function factorial(number){
    let result = 1; 
    for(let i=1; i<=number; i++){
        result = result * i;
    }
    return result;
}
const totalFactorial = factorial(3);
console.log(totalFactorial);