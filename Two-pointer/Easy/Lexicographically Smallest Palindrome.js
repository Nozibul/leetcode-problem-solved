/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    // Edge case: if the string is empty or has one character, it's already a palindrome
    if (s.length <= 1) return s;
   
    // Meaning variables named for two pointers
    let left = 0;
    let right = s.length - 1;
    const arr = s.split('');

    // Main logic using two pointer technique
    while (left < right) {
        if (arr[left] < arr[right])  arr[right] = arr[left];
        if(arr[left] > arr[right]) arr[left] = arr[right];
            
        left++;
        right--;
    }
    // Return the modified array as a string
    return arr.join('');
};
console.log(makeSmallestPalindrome("efcge")); // "efcfe"
console.log(makeSmallestPalindrome("abcd")); // "abba"
console.log(makeSmallestPalindrome("seven")); // "neven"