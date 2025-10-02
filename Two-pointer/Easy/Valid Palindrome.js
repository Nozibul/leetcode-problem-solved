/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Edge case for empty string
    if (s.length === 0) return true;

    // Normalize the string by converting to lowercase and removing non-alphanumeric characters
    s = s.toLowerCase().replace(/[\W_]/g, '');

    // Initialize variables namesd left and right pointers
    let left = 0;
    let right = s.length - 1; 

    // Main logic to check for palindrome using two pointer approch
    while(left < right){
        if(s[left] !== s[right]) return false;
        left++;
        right--;
    }
    // If all characters matched, it's a palindrome
    return true;
};
console.log(isPalindrome('Race a car')); // false
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('dde')); // true
console.log(isPalindrome('')); // true
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
