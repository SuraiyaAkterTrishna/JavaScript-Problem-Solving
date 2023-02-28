// traffic signal 
const signal = 'green';
switch(signal) {
    case 'yellow':
        console.log('You should stop now.');
        break;
    case 'green':
        console.log('You should cross the road.');
        break;
    case 'red':
        console.log('If you try to cross the road, you may be in danger.');
        break;
    default: 
        console.log('Do not try to cross the road');
}