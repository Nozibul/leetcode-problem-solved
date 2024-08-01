/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 1) {
        return [nums.slice()];
    }
    
    var res = [];

    for (var i = 0; i < nums.length; i++) {
        var n = nums.shift();
        var perms = permute(nums.slice());

        for (var p of perms) {
            p.push(n);
        }
        
        res.push(...perms);
        nums.push(n);
    }

    return res;  
};
console.log(permute([1,2,3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]