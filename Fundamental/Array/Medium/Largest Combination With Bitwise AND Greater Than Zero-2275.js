/**
 * @param {number[]} candidates
 * @return {number}
 */
const largestCombination = function (candidates) {
    let ans = 0;
    for (let i = 0; i < 32; i++) {
        let cnt = 0;
        for (const candidate of candidates) {
            if (candidate & (1 << i)) cnt++;
        }
        ans = Math.max(ans, cnt);
    }
    return ans;
};
console.log(largestCombination([16,17,71,62,12,24,14])); // 4