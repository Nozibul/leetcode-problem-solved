/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let currentValue = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
        result = result * 26 + currentValue;
    }
    return result;
};

console.log(titleToNumber("A")); // 1
console.log(titleToNumber("AB")); // 28