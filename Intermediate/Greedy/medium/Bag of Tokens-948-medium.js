/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
function bagOfTokensScore(tokens, power) {
    tokens.sort((a, b) => a - b);

    let score = 0;
    let ans = 0;

    let i = 0;
    let len = tokens.length - 1;

    while (i <= len) {
        if (tokens[i] <= power) {
            score += 1;
            if (ans < score) ans = score;
            
            power -= tokens[i];
            i++;
        } else if (score > 0) {
            power += tokens[len];
            score -= 1;
            len--;
        } else break;
        
    }
    return ans;
}

console.log(bagOfTokensScore([100,200,300,400], 200));// 2