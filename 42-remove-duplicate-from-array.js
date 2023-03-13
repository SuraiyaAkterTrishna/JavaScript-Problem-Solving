// first 
const names = ['abul', 'babul', 'cabul', 'dabul', 'kabul', 'babul'];
function removeDuplicate(names){
    let unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if(unique.includes(name)=== false){
            unique.push(name);
        }
    }
    return unique;
}
const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);

// second 
const numbers = [51, 41, 61, 51, 21, 41, 31, 61, 61, 71, 61, 71, 81, 31];
function removeDuplicateNumbers(numbers){
    let uniqueNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        if(uniqueNumbers.indexOf(number) === -1){
            uniqueNumbers.push(number);
        }
    }
    return uniqueNumbers;
}
const uniqueNumbersFromArray = removeDuplicateNumbers(numbers);
console.log(uniqueNumbersFromArray);

