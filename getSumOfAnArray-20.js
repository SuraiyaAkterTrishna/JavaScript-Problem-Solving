function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}
const numbers = [12, 24, 36, 48, 60, 72, 84, 96];
const sumOfNumbers = getSumOfAnArray(numbers);
console.log(sumOfNumbers);