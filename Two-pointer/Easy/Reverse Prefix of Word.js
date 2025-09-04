/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
const reversePrefix = function(word, ch) {
    // Edge case - if ch not found, return original word
    if (!word || word.length === 0 || word.indexOf(ch) === -1) return word; 
    
    // Convert string to array for in-place swapping
    let str = word.split('');

    // initialize variables with meaningful names
    let left = 0;
    let right = word.indexOf(ch);

    // Main logic with two pointer approch
    while (left < right){
        let temp = word[left]; 
        str[left] = str[right]; 
        str[right] = temp;

       // Move pointers
        left++;
        right--;
    }
    // Return statement
    return str.join('') ;
    
};
console.log(reversePrefix("abcdefd", "d")) ; // Output: "dcbaefd"
console.log(reversePrefix("xyxzxe", "z")) ; // Output: "dcbaefd"