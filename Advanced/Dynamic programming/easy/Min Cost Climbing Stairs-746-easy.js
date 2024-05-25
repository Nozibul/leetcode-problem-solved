/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
     cost.push(0);

     for (let i = cost.length - 4; i >= 0; i--) {
          cost[i] += Math.min(cost[i + 1], cost[i + 2]);
     }

     return Math.min(cost[0], cost[1]);
};
console.log(minCostClimbingStairs([10,15,20])); // 15
console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1])); // 6
/* 
Explanation: You will start at index 1.
- Pay 15 and climb two steps to reach the top.
The total cost is 15.


Explanation: You will start at index 0.
- Pay 1 and climb two steps to reach index 2.
- Pay 1 and climb two steps to reach index 4.
- Pay 1 and climb two steps to reach index 6.
- Pay 1 and climb one step to reach index 7.
- Pay 1 and climb two steps to reach index 9.
- Pay 1 and climb one step to reach the top.
The total cost is 6.
*/