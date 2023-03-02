function factorial(number){
    let result = 1; 
    let i = number; 
    while(i >= 1){
        result = result * i;
        i--;
    }
    return result;
}
const factorialNumber = factorial(3);
console.log(factorialNumber);