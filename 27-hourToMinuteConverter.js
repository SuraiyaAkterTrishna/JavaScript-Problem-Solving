function hourToMinuteConverter (hour){
    const minutes = hour * 60; 
    return minutes;
}
const totalTime = hourToMinuteConverter(60);
console.log(totalTime);