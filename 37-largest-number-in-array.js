// find the largest number in an array 
function largest(numbers){
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const index = i; 
        const element = numbers[index];
        if(element > max){
            max = element;
        }
    }
    return max;
}
const heights = [167, 190, 120, 165, 137];
const largestHeight = largest(heights);
console.log(largestHeight);