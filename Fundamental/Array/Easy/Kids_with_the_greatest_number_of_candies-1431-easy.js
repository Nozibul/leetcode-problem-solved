/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxLen = Math.max(...candies) ;
    let res = [];

    for (let i = 0; i < candies.length; i++) {
         res.push((candies[i] + extraCandies) >= maxLen);
 
    };
    return res;
};
const result = kidsWithCandies([4,2,1,1,2], 1);
console.log(result);