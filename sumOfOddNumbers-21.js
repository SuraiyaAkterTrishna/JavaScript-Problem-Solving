function sumOfArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    sum = sum + element;
  }
  return sum;
}
function getOddNumbers(numbers) {
  let oddNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 !== 0) {
      oddNumbers.push(element);
    }
  }
  return oddNumbers;
}

const arr = [25, 33, 26, 12, 27, 82, 93, 11];
const oddNumbers = getOddNumbers(arr);
const sumOfOddNumbers = sumOfArray(oddNumbers);
console.log(sumOfOddNumbers);
