function celciusToFarenheit(celcius){
    const farenheit = (celcius * 1.8) + 32;
    return farenheit;
}
const myTemparature = celciusToFarenheit(15);
console.log(myTemparature);