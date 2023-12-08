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