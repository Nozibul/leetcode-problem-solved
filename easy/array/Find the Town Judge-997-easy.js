/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let arr = Array(n+1).fill(0);

    for(const [i, j] of trust){
        console.log(j);
        arr[i] -= 1;
        arr[j] += 1;
    }
    return arr.lastIndexOf(n-1);
};
console.log(findJudge(3, [[1, 3], [2, 3]]));