// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
// fibo[3] = fibo[2] + fibo[1];
// fibo[10] = fibo[9] + fibo[8];
// fibo[122] = fibo[121] + fibo[120];
// fibo[555] = fibo[554] + fibo[553];
// fibo[n] = fibo[n-1] + fibo[n-2];
// fibo[i] = fibo[i-1] + fibo[i-2];

function fibonacci(n){
    const fibo = [0, 1];
    for(i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
const series = fibonacci(15);
console.log(series);