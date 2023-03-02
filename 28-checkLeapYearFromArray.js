function findLeapYear(years){
    let leapYears = [];
    for(let i = 0; i < years.length; i++){
        const index = i;
        const element = years[index];
        if((element % 400 === 0 || element % 100 !== 0) && element % 4 === 0){
            leapYears.push(element);
        }
    }
    return leapYears;
}
const yearsArray = [2023, 2024, 2025, 2028, 2030];
const checkLeapYear = findLeapYear(yearsArray);
console.log(checkLeapYear);