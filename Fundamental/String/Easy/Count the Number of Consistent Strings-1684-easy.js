/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    const newAllowed = new RegExp(`^[${allowed}]+$`);
    let count = 0

    words.forEach(word => {
        if (word.match(newAllowed)) count++ ;
    });
    return count;
};
console.log(countConsistentStrings("abc", ["ad","bd","aaab","baa","badab"]));