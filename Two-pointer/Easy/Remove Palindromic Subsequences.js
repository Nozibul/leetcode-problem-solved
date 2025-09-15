/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    //Edge case - if string is empty, return 0
    if (!s || s.length === 0) return 0;

    // Main logic - check if the string is a palindrome
    if(isPalindrome(s) === true) return 1;
    else return 2; // If not a palindrome, return 2

    //Helper function to check if a string is palindrome
    function isPalindrome(str) {

    // Variables anme with miningful names
    let left = 0;
    let right = s.length - 1;

     while(left < right ){
        if(str[left] !== str[right]){
            return false;
        } 
        left++;
        right--;
     }
     return true ;
    }
     
};
console.log(removePalindromeSub("ababa")); // Output: 1
console.log(removePalindromeSub("abb")); // Output: 2