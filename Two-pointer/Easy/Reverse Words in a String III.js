/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  // Edge case - if s is empty, return empty string
  if (!s || s.length === 0) return "";

  // Convert string to array of words
  let str = s.split(" ");

  for (let i = 0; i < str.length; i++) {
    // Split current word into characters
    let chars = str[i].split("");
    let left = 0;
    let right = chars.length - 1;

    // Reverse using two pointers
    while (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }

    // Update word in str
    str[i] = chars.join("");
  }

  return str.join(" ");
};
console.log(reverseWords("Mr Ding")); // Output: "rM gnid"
console.log(reverseWords("Let's take LeetCode contest")); // Output: "s'teL ekat edoCteeL tsetnoc"

const reverseWords3 = function(s) {
    // Edge case - if s is empty, return empty string
    if (!s || s.length === 0) return "";
    
    // Meaningful variables name
    let result = '';
    let word = '';
    
    // MAin logic
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            result += word + ' ';
            word = '';
        } else {
            word = s[i] + word; 
        }
    }
    // return statement
    return result + word; 
};
console.log(reverseWords3("Mr Ding"))