const myFriends = ['priya', 'rojoniiii', 'khadija', 'sadhonaa', 'murshidaa'];

function bestFriend(friends){
    let largestName = friends[0];
    for(let i = 0; i < friends.length; i++) {
        const singleName = friends[i];
        if(singleName.length > largestName.length){
            largestName = singleName;
        }
    }
    return largestName;
}

const allFriendsName = bestFriend(myFriends);
console.log(allFriendsName);