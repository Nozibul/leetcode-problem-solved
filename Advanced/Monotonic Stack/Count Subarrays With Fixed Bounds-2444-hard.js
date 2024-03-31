/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
        const n = nums.length;
        let result = 0;
        let minKIndex = -1;
        let maxKIndex = -1;
        let culpritIndex = -1;

        for (let i = 0; i < n; i++) {
            if (nums[i] < minK || nums[i] > maxK) culpritIndex = i;
            
            if (nums[i] === minK) minKIndex = i;

            if (nums[i] === maxK) maxKIndex = i;

            const smaller = Math.min(minKIndex, maxKIndex);
            const temp = smaller - culpritIndex;

            result += temp <= 0 ? 0 : temp;
        }
        
        return result;
};

console.log(countSubarrays([1,3,5,2,7,5], 1, 5)); // 2