/* একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।  */


const numbers = [1, 3, 5, 2, 4, 9, -2, 8, 7];
function findPositionNumbers(numbers){
    let positiveNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const num = numbers[i];
        if(num > 0){
            positiveNumbers.push(num);
            
        }
        else{
            break;
        }
    }
    return positiveNumbers;
    
}
const positiveNumber = findPositionNumbers(numbers);
console.log(positiveNumber);