/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const result = [];
    while(matrix.length){
      const topRow = matrix.shift();
      result.push(...topRow);
  
      for(const row of matrix){
        let rightValue = row.pop();
        if(rightValue)
          result.push(rightValue);
          row.reverse();   
      }
      matrix.reverse();
    }
    return result;
  };
  
  const spiralOrderResult = spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);
  console.log(spiralOrderResult); // [1,2,3,6,9,8,7,4,5]
  