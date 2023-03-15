function paperRequirements(firstBookNumber, secondBookNumber, thirdBookNumber){
    const firstBookPaper = 100; 
    const secondBookPaper = 200;
    const thirdBookPaper = 300;

    const firstBookTotalPaper = firstBookNumber * firstBookPaper;
    
    const secondBookTotalPaper = secondBookNumber * secondBookPaper;

    const thirdBookTotalPaper = thirdBookNumber * thirdBookPaper;

    const totalPaper = firstBookTotalPaper + secondBookTotalPaper + thirdBookTotalPaper;

    return totalPaper;
}

const myBook = paperRequirements(1, 1, 1);
console.log(myBook);