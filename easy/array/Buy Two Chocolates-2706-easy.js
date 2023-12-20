/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a,b)=>a-b);
    
    const ans = money-prices[0]-prices[1];
    return ans >= 0 ? ans : money 
}
const result = buyChoco([1,2,3], 3);
console.log(result); // 0