function inchToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const myHeight = inchToFeet(72);
console.log(myHeight);

const myGrandPaHeight = inchToFeet(96);
console.log(myGrandPaHeight);