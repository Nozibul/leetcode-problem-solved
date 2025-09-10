/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let low = 0, high = s.length ;
    let result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I") {
            result.push(low);
            low++;
        } else { 
            result.push(high);
            high--;
        }
    }

    result.push(low); 
    return result;
};

console.log(diStringMatch("IDID")); // [0,4,1,3,2]
console.log(diStringMatch("III")); // [0,1,2,3]