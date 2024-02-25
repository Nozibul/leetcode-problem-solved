/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    const revStr = [];

    for (const char of s) {
        char === 'i' ? revStr.reverse() : revStr.push(char);
    }
    return revStr.join('');
};
console.log(finalString("string")); // rtsn
console.log(finalString("striing")); // strng