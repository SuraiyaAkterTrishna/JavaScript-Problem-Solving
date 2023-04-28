/* 1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */

const multiply = (first, second, third) => {
    const multiplication = first * second * third;
    return multiplication;
}
const result = multiply(10, 20, 30);
console.log(result);