/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = function (s) {
    let flag = true;
    let count = 0;
    
    for (let x of s) {
        if (flag && x === "*") count++;
        if (x === "|") flag = !flag;
    }
    return count;
};
console.log(countAsterisks("l|*e*et|c**o|*de|")); // 2