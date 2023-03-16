/* Problem 5: isBestFriend

তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে । 
*/

const people1 = {name: 'abul', friend: 'babul'};
const people2 = {name: 'babul', friend: 'abul'};
const people3 = {name: 'doe', friend: 'alex'};
const people4 = {name: 'alex', friend: 'john'};
const people5 = {name: 'alex', friend: 'doe'};

function isBestFriend(p1, p2){
    if(p1.name === p2.friend && p1.friend === p2.name){
        return true;
    }
    else{
        return false;
    }
}
const bestFriend = isBestFriend(people3, people5);
console.log(bestFriend);

