/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let count = 0, outer = "" ;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            count++;
        }
        if (count > 1) {
            outer += s[i]
        }
        if (s[i] === ")") {
            count--;
        }
    }
    return outer;
};

console.log(removeOuterParentheses("(()())(())")); //"()()()"