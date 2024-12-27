/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let res = 0;
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] > 0) res++;
      }
      res += Math.max(...grid[i]);
      res += Math.max(...grid.map(r => r[i]));
    }
    return res;
  };
  console.log(projectionArea([[1,2],[3,4]])) ; // 17