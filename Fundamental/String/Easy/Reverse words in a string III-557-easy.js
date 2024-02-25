/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(" ");
    console.log(sArr);
    let newArr = [];
    for(let i=0; i<sArr.length; i++){
        newArr.push(sArr[i].split("").reverse().join(""));
    }
    return newArr.join(" ");
};
console.log(reverseWords("Let's take LeetCode contest"));
// "s'teL ekat edoCteeL tsetnoc"