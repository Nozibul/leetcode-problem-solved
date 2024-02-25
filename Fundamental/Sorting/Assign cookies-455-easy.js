/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);
    let j = 0, cookie = 0;
    
    for (let num of s) {
        if (num >= g[j]) cookie++, j++;
    }
    return cookie;
};
const result = findContentChildren([1,2], [1,2,3]);
console.log(result);