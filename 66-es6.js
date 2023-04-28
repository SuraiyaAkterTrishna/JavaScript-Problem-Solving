/* Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result */

const findMax = (arr1, arr2) => {
    const combinedArray = [...arr1, ...arr2];
    const maximum = Math.max(...combinedArray);
    return maximum;
}
const first = [1, 2, 3, 4, 5, 28];
const second = [30, 23, 35, 21, 3];
const output = findMax(first, second);
console.log(output);
