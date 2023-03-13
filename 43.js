/* 
1. show output from 1-50
2. if the number is divisible by 3 then instead of the number show 'foo'
3. if the number is divisible by 5 then instead of the number show 'bar'
4. if the number is divisible by both 3 and 5 then instead of the number show 'foobar'
*/

for(let i = 1; i <= 50; i++){
    let number = i;
    if((number % 3 === 0) && (number % 5 === 0)){
        console.log('foo');
    }
    else if(number % 3 === 0){
        console.log('bar');
    }
    else if(number % 5 === 0){
        console.log('foobar');
    }
    else {
        console.log(number);
    }
}