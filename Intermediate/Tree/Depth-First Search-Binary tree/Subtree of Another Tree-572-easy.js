
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSameTree = (a, b)=>{
    if (!a && !b) return true;
    if (a && !b) return false;
    if (b && !a) return false;
    if (a.val === b.val) return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}

var isSubtree = function(root, subRoot) {
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};

console.log(isSubtree([3,4,5,1,2], [4,1,2])); // true