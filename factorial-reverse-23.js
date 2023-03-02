function factorial(number){
    let result = 1; 
    for(let i = number; i >= 1; i--){
        result = result * i;
    }
    return result;
}
const factorialNumber = factorial(4);
console.log(factorialNumber);