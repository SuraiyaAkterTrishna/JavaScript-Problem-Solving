/* 3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */

const add = (first, second = 10) => first + second;

const output = add(20);
console.log(output);