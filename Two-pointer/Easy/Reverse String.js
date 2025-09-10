/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // Edge case - if s is empty, return empty array
    if(!s || s.length === 0) return [];

    // Initilize Variable name with mining name
    let left = 0;
    let right = s.length -1;

    // Main Logic usinh Two pointer coding pattern
    while(left < right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;

        left++;
        right--
    }
 return s;
};
console.log(reverseString(["h","e","l","l","o"]))// ["o","l","l","e","h"]
console.log(reverseString(["H","a","n","n","a","h"]))// [ 'h', 'a', 'n', 'n', 'a', 'H' ]