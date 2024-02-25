/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    const res = [];
    let end = s.length-1;

    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-zA-Z]/i)) {
            while(!s[end].match(/[a-zA-Z]/i)) end--;
            res.push(s[end--]);
        }
        else {
            res.push(s[i]);
        }
    }
    return res.join("");
};

const result = reverseOnlyLetters("ab-cd");
console.log(result);