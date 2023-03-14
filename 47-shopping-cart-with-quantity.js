const shoppingCart = [
    {name: 'shirt', price: 1100, quantity: 5}, 
    {name: 'pant', price: 2000, quantity: 3}, 
    {name: 'watch', price: 500, quantity: 2}, 
    {name: 'shoe', price: 3000, quantity: 4}, 
    {name: 'belt', price: 300, quantity: 1}, 
];
function totalCost(products){
    let total = 0; 
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        total = total + productTotal;
    }
    return total;
}

const expense = totalCost(shoppingCart);
console.log('Total cost is: ', expense, ' taka');