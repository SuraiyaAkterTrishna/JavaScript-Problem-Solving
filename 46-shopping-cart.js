const shoppingCart = [
    {name: 'shirt', price: 1100}, 
    {name: 'pant', price: 2000}, 
    {name: 'watch', price: 500}, 
    {name: 'shoe', price: 3000}, 
    {name: 'belt', price: 300}, 
];
function totalCost(products){
    let total = 0; 
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        total = total + product.price;
    }
    return total;
}

const expense = totalCost(shoppingCart);
console.log('Total cost is: ', expense, ' taka');