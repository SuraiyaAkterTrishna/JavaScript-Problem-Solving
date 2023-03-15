function centimeterToMeter(centimeters){
    const meters = centimeters / 100; 
    return meters;
}
const road = centimeterToMeter(5000);
console.log(road);