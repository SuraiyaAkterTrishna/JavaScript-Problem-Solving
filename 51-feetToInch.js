function feetToInch(feet){
    const inches = feet * 12;
    return inches;
}
const height = 6;
const heightInInch = feetToInch(height);
console.log(heightInInch);