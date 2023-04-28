/* Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result */

const newFriends = [];
const friendsName = (friends) => {
    for (const friend of friends) {
        if(friend.length % 2 === 0){
            newFriends.push(friend);
        }
    }
    return newFriends;
}
const myFriend = ['alia', 'kalia', 'maliha', 'kobita', 'shobita'];
const allName = friendsName(myFriend);
console.log(allName);