/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    // Edage case - if words is empty, return empty string
    if (!words || words.length === 0) return ""; 


   // Main logic using two pointer coding pattern
   for (let word of words){

        // Initialize variable with meaningful names
        let left = 0;
        let right = word.length -1 ;
        let isPalindrome = true;

       while(left < right){
    
        if(word[left] !== word[right]){
            isPalindrome = false;
            break;
        } 
        left++;
        right--;
    }
    if (isPalindrome) return word; // Return the first palindrome
}
return ""; // If no palindrome found
};
console.log(firstPalindrome(["abc","car","ada","racecar","cool"])); // Output: "ada"
console.log(firstPalindrome(["notapalindrome","racecar"])); // Output: "racecar"
console.log(firstPalindrome(["def","ghi"])); // Output: ""