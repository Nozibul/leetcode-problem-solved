
var tree2str = function(root) {
    if (!root) return "";

    let res = root.val.toString();

    if (root.left || root.right) {
        res += `(${tree2str(root.left)})`;
    }

    if (root.right) {
        res += `(${tree2str(root.right)})`;
    }

    return res;
};
console.log(tree2str([1,2,3,4])); // "1(2(4))(3)"
console.log(tree2str([2,1,3,4])); 