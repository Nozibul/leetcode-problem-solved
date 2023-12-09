
function inorderTraversal(root) {
    const stack = [];
    const resultArray = [];
  
    while (root || stack.length) {
      if (root) {
        stack.push(root);
        root = root.left;
      } else {
        root = stack.pop();
        resultArray.push(root.val);
        root = root.right;
      }
    }
    return resultArray;
  };
  const result = inorderTraversal([1,null,2,3]);
  console.log(result); // [1,3,2]