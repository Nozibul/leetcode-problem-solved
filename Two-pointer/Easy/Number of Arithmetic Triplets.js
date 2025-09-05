/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = function(nums, diff) {
    // Edge case - if nums is empty, return 0
    if (!nums || nums.length === 0) return 0; 

    // Variable for counting valid triplets
    let triplets = 0;      
    let left = 0;              
    let mid = 1;    // 2        
    let right = 2;   // 3       

    // Main logic using Two Poinetr 
    while(left < nums.length-2){
        let gap1 = nums[mid] - nums[left]; // 1
        let gap2 = nums[right] - nums[mid]; // 1

        if(gap1 === diff && gap2 === diff){
            triplets++;
            left++;
            mid++;
            right++
        } else if(gap1 < diff){
          mid++;
          if (mid === right) right++; 
        } else if(gap2 < diff){
            right++
        }else{
          left++;
            if (mid <= left) mid = left + 1;
            // if (right <= mid) right = mid + 1;
        }
    }
    // return statement
    return triplets;
};

console.log(arithmeticTriplets([4,5,6,7,8,9], 2)); // Expected: 2
