/**
 * @param {string[]} details
 * @return {number}
 */

var countSeniors = function(details) {
    let ans = 0;
    for (const d of details) {
        const age = +(d[11] + d[12]);
        if (age > 60) {
            ans++;
        }
    }
    return ans;
};

console.log(countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"])); //2