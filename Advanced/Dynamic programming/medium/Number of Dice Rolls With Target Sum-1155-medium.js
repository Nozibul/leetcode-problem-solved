/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
const numRollsToTarget = (n, k, target) => {
    const MOD = 10**9 + 7;
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; i++) {
        const next = new Array(target + 1).fill(0);
        for (let j = 1; j <= target; j++) {
            for (let face = 1; face <= k; face++) {
                if (j - face >= 0) {
                    next[j] = (next[j] + dp[j - face]) % MOD;
                }
            }
        }
        dp.splice(0, target + 1, ...next);
    }

    return dp[target];
};
const result = numRollsToTarget(1, 6, 3);
console.log(result);