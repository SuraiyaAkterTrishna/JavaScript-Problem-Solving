function milesToKilometer(miles){
    const kilometer = miles * 1.60934;
    return kilometer;
}
var totalWay = milesToKilometer(75);
console.log(totalWay.toFixed(2));