var lengthOfLastWord = function(s) {
    const res = s.trimEnd().split(" ");
    return res[res.length-1].length;
};
const result = lengthOfLastWord("luffy is still joyboy");
console.log(result);