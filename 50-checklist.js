// variable declaration 
const friend = 'Rozy';
const age = 45; 
const isBlack = false;

// console.log(friend, age, isBlack);

// let const 
const myAddress = "Rupsa";
// myAddress = "Khulna"; //reassign will give error

// console.log(myAddress);

let mySalary = '300 usd';
// let mySalary = '200 usd'; //redefine will give error
mySalary = '500 usd'; //but reassign possible
// console.log(mySalary);

const rabbi = 350; 
const sagor = 350; 

const total = rabbi + sagor; 
// console.log(total);

const moreMoney = sagor - rabbi;
// console.log(moreMoney);

const multiplyMoney = rabbi * sagor;
// console.log(multiplyMoney);

const divineMoney = sagor / rabbi;
// console.log(divineMoney);

// comparison
/* if(rabbi > sagor){
    console.log('rabbi has more money');
}
else if(rabbi < sagor){
    console.log('sagor has more money');
}
else if(rabbi == sagor){
    console.log('they have equal amount of money');
}
else {
    console.log('They have no money');
} */

if(rabbi >= sagor || rabbi != sagor){
    // console.log('Rabbi is rich');
}
else{
    // console.log('Sagor is rich');
}

let i = 7; 
while(i <= 19){
    console.log(i);
    i = i+2;
}


