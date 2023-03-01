function isEven(number){
    const remaining = number % 2; 
    if(remaining === 0) {
        return true;
    }
    else {
        return false;
    }
}
const myNumber = isEven(25);
console.log(myNumber);
const hisNumber = isEven(26);
// console.log(hisNumber);