/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
let min = Infinity
for(let i=0;i<prices.length;i++){
    for(let j=i+1;j<prices.length;j++){
        let tot = prices[i] + prices[j]
        if(tot <= money){
            min = Math.min(min,tot)
        }
    }
}
if(min === Infinity)return money
return money-min
};