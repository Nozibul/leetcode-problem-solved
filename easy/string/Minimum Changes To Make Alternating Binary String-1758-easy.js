/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    
        let firstZero = 0;
        let firstOne = 0; // 2
    
        for (let i = 0; i < s.length; i++) {
            if (i % 2 === 0) {
                if (s[i] !== '0') firstZero++;
                if (s[i] !== '1') firstOne++;
            } else {
                if (s[i] !== '1') firstZero++;
                if (s[i] !== '0') firstOne++;
            }
        }
        return Math.min(firstZero, firstOne);
};
const result = minOperations("0100");
console.log(result); //1

