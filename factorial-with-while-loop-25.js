function factorial(number){
    let result = 1; 
    let i = 1; 
    while(i <= number){
        result = result * i;
        i++;
    }
    return result;
}
const factorialNumber = factorial(9);
console.log(factorialNumber);