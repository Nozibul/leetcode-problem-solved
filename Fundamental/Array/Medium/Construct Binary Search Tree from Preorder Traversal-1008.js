/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function(preorder) {
    const constructTree = (arr) => {
   if(arr.length === 0){
     return null;
   }
   if(arr.length === 1){
     let node = new TreeNode(arr[0]);
     return node;
   }
   let rootNode = new TreeNode(arr[0]);
   let rightIdx = -1;
   for(let i = 1; i < arr.length; i++){
     if(arr[i] >= arr[0]){
       rightIdx = i;
       break;
     }
   }
   if(rightIdx !== -1){
   let leftTree = constructTree(arr.slice(1,rightIdx));
   let rightTree = constructTree(arr.slice(rightIdx, arr.length));
   rootNode.left = leftTree;
   rootNode.right = rightTree;
   }else{
     rootNode.left = constructTree(arr.slice(1, arr.length));
   }
   return rootNode;
 }
 return constructTree(preorder);
};
console.log(bstFromPreorde([8,5,1,7,10,12])); // [8,5,10,1,7,null,12]




  




 




   
