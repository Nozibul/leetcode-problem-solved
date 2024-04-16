/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
   let count = 0;
   
   for(let i of grid)
   for(let j of i){
       if(j < 0) count++;
   } 
   return count;
};

console.log(countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])); // 9