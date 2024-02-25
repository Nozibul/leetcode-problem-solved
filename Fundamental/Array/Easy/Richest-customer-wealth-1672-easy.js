/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let maxLength = 0;
    for (let i = 0; i < accounts.length; i++) {
        const wealth = accounts[i].reduce((acc, curr)=> acc+curr, 0);
        maxLength = Math.max(maxLength, wealth);
    };
    return maxLength;
};
const result = maximumWealth([[2,8,7],[7,1,3],[1,9,5]]);
console.log(result);