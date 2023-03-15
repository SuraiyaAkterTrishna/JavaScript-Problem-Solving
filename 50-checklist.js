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
    // console.log(i);
    i = i+2;
}

const myBook = ['bela furabar age', 'atomic habits', 'think and grow rich', 'the seven habits of highly effective people', 'the magic of thinking big', 'paradoxical sazid'];

// console.log(myBook.length);

myBook[3] = 'productive muslim';
// console.log(myBook);

myBook.push('never stop learning', 'student hacks');


myBook.pop();
// console.log(myBook);

/* for(let i = 0; i < myBook.length; i++){
    console.log(myBook[i]);
} */

for (const book of myBook) {
    // console.log(book);
}

const numbers = [11, 13, 68, 92, 89, 72, 55, 85, 91];
for(const number of numbers){
    if(number > 80) {
        // console.log(number);
    }
}

function sum(a, b, c){
    const output = a + b + c;
    return output;
}
const result = sum(1, 2, 3);
console.log(result);

