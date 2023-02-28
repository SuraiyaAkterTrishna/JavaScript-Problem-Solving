function make_avg(arr, size) {
    if(size == 0) {
        return 0;
    }
    else {
        return arr.reduce((sum, num) => sum + num)/size;
    }
}
let arr = [1, 2, 3, 4, 5];
let size = arr.length;
let avg = make_avg(arr, size);
console.log(avg);