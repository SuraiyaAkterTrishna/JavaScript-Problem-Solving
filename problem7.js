// buy singara
function bringSingara ( myMoney ) {
    var singaraPrice = 10; 
    var quantity = myMoney / singaraPrice;
    return quantity;
}
var totalMoney = 200; 
var singaras = bringSingara(totalMoney);
console.log(singaras);