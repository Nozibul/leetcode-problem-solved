/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const hash = {};
    let max = -1;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] in hash) {
            max = Math.max(i - hash[s[i]], max)
        } else {
            hash[s[i]] = i;
        }
    }

    return max > -1 ? max - 1 : max
};
const result = maxLengthBetweenEqualCharacters("aa");
console.log(result); // 0