var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);

console.log("Index of Banana is: ", fruits.indexOf('Banana'));

fruits[1] = 'Mango';
console.log("After replacing banana with mango: " , fruits);
console.log("Now I will remove orange and will add watermelon to fruits[]");

fruits.pop();
console.log("Remove orange done. " ,fruits);

fruits.push('Watermelon');
console.log("New array: ", fruits);