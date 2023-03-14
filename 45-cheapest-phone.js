const phones = [
    {name: 'Samsung', price: 45000, camera: '13mp', color: 'blue'},
    {name: 'Hitachi', price: 25000, camera: '25mp', color: 'black'},
    {name: 'Lava', price: 33000, camera: '30mp', color: 'red'},
    {name: 'Oppo', price: 80000, camera: '45mp', color: 'green'},
    {name: 'Xiaomi', price: 95000, camera: '20mp', color: 'silver'},
    {name: 'Redmi', price: 70000, camera: '23mp', color: 'pink'},
    {name: 'Vivo', price: 50000, camera: '25mp', color: 'black'},
];
function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(cheapest.price > phone.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const cheapestPhoneIs = cheapestPhone(phones);
console.log(cheapestPhoneIs);
