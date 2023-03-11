// find the smallest number in an array 
function smallest(numbers){
    let small = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i; 
        const element = numbers[index];
        if(element < small){
            small = element;
        }
    }
    return small;
}
const heights = [167, 190, 127, 160, 137];
const smallestHeight = smallest(heights);
console.log(smallestHeight);