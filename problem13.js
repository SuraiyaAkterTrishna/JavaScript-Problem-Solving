function odd_even(x){
    if(x % 2 == 0){
        return "Even number";
    }
    else{
        return "Odd number";
    }
}
var number = odd_even(15);
console.log(number);