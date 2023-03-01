function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0) {
        return "Year is leap year";
    }else{
        return "Year is not leap year"
    }
}
console.log(isLeapYear(2025));