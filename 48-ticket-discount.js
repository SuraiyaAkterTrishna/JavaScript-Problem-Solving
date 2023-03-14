/* 
1. if ticket numbers is less than 100, per ticket price: 100
2. if ticket numbers is more than 100, but less than 200. First 100 tickets will be 100/ticket,
rest tickets will be 90 taka per price
    first 100   ---> 100tk
    rest     ---> 90tk
3. if you purchase more than 200 ticket, per ticket price: 70tk
    first 100   ---> 100tk
    101-200     ---> 90tk
    200+        ---> 70tk
*/

function ticketPrice(ticketQuantity){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if(ticketQuantity <= 100){
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if(ticketQuantity <= 200){
        const first100Price = first100Rate * 100;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100Rate;
        const totalTicketPrice = first100Price + restTicketPrice;
        return totalTicketPrice;
    }
    else{
        const first100Price = first100Rate * 100;
        const second100Price = second100Rate * 100;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * 70;
        const totalTicketPrice = first100Price + second100Price + restTicketPrice;
        return totalTicketPrice;
    }
}
const totalPrice = ticketPrice(201);
console.log(totalPrice);
