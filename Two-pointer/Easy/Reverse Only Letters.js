/**
 * @param {string} s
 * @return {string}
 */

var reverseOnlyLetters = function(s) {
    //Edge case
    if (s.length === 0) return s;

    //Initialize variables with meaningful names
    let left = 0, right = s.length - 1;
    let newValue = s.split("");

    //Two pointer approach
    while (left <= right) {
        if (/[a-zA-Z]/.test(newValue[left]) && /[a-zA-Z]/.test(newValue[right])) {
            [newValue[left], newValue[right]] = [newValue[right], newValue[left]]; // swap
            left++;
            right--;
        } else if (!/[a-zA-Z]/.test(newValue[left])) {
            left++;
        } else if (!/[a-zA-Z]/.test(newValue[right])) {
            right--;
        }
    }
    // Return statement
    return newValue.join("");
};

console.log(reverseOnlyLetters("ab-cd")); // "dc-ba"
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"