/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = function(image) {
    // Edge Case - if image is empty, return empty array
    if(!image|| image.length === 0) return [];
    
    // Main Logic using two pointer coding pattern
    for(let row of image){
        let left = 0;
        let right = row.length - 1;

        while(left <=right){
           if(left === right){
             row[left] = 1 - row[left]; // Handle Middle element
     
           }else{
            let temp = 1 - row[right];
            row[right] = 1-row[left];
            row[left] = temp;
             }
            left++;
            right--;
         }
     
    }
   // Return statement
   return image
};
console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])); // [[1,0,0],[0,1,0],[1,1,1]]
console.log(flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])); // [ [ 1, 1, 0, 0 ], [ 0, 1, 1, 0 ], [ 0, 0, 0, 1 ], [ 1, 0, 1, 0 ] ]