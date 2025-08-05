/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {
    if (!root) {
        return null;
    }
    if (root.val === val) {
        return root;
    } else if (root.val > val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val);
    }
};
    

console.log(searchBST([4,2,7,1,3], 2)); // 2