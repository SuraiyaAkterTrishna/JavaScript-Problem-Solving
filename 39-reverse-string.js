function reverseStr(str) {
  let reversed = "";
  for(let i = str.length-1; i >= 0; i--){
    const element = str[i];
    reversed = reversed + element;
  }
  return reversed;
}
const myString = "I am a good girl";
const reverseString = reverseStr(myString);
console.log(reverseString);
