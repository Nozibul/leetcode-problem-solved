/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLengthOfOptimalCompression = function(s, k) {
    s = s.split('')
    const map = s.map(row => new Array(k + 1).fill(-1))
    
    const dp = (row, k) => {
        if(k < 0) return s.length
        if(k + row >= s.length) return 0
        
        let ans = map[row][k]
        if(ans !== -1) return ans
        ans = dp(row + 1, k - 1)
        let length = 0
        let same = 0
        let diff = 0
        
        for(let x = row; x < s.length && diff <= k; x++) {
            if(s[x] === s[row]) {
                same++
                if(same <= 2 || same === 10 || same === 100) {
                    length++
                }
            } else {
                diff++
            }
            ans = Math.min(ans, length + dp(x + 1, k - diff))
        }
        map[row][k] = ans
        return ans
    }
    return dp(0, k)
};

const result = getLengthOfOptimalCompression('aaabcccd', 2);
console.log(result);
