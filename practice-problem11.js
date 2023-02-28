function make_avg(a, b, c){
    var total = a + b + c;
    var average = total / 3; 
    return average;
}
var averageMark = make_avg(30, 50, 70);
console.log(averageMark);
