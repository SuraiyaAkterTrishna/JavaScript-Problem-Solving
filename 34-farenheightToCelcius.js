function farenheitToCelcius(farenheit){
    const celcius = (farenheit - 32) / 1.8;
    return celcius;
}
const temparature = farenheitToCelcius(59);
console.log(temparature);