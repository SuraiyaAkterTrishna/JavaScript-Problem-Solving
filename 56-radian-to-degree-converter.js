// Problem:1  radianToDegree
/*  formula
    degree = radians * (180/PI) 
*/

function radianToDegree(radian){
    const pi = Math.PI;
    const degree = radian * (180 / pi);
    return degree;
}
const convertedDegree = radianToDegree(1);
console.log(convertedDegree.toFixed(4));