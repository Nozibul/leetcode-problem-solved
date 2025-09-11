
// Definition for a binary tree node.
// function TreeNode(val, left, right) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
// }
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    // Step 1: Inorder traversal করে সব value array তে রাখা
    let nums = [];
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        nums.push(node.val);
        inorder(node.right);
    }
    inorder(root);

    // Step 2: Two pointer technique ব্যবহার করা
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum === k) return true;
        if (sum < k) left++;
        else right--;
    }

    return false;
};
// Test cases
console.log(findTarget([5,3,6,2,4,null,7], 9)); // true 
console.log(findTarget([5,3,6,2,4,null,7], 11)); // true