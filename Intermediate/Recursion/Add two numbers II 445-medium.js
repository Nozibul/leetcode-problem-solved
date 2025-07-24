
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const stack1 = [];
    const stack2 = [];
    while (l1 !== null) {
      stack1.push(l1.val);
      l1 = l1.next;
    }
    while (l2 !== null) {
      stack2.push(l2.val);
      l2 = l2.next;
    }
  
    let carry = 0;
    let sumList = null;
    while (stack1.length > 0 || stack2.length > 0 || carry > 0) {
      const sum = carry +
        (stack1.length > 0 ? stack1.pop() : 0) +
        (stack2.length > 0 ? stack2.pop() : 0);
  
      const newNode = new ListNode(sum % 10);
      newNode.next = sumList;
      sumList = newNode;
  
      carry = Math.floor(sum / 10);
    }
  
    return sumList;
  };
  console.log(addTwoNumbers([7,2,4,3], [5,6,4])) // [8, 0, 7]
  console.log(addTwoNumbers([2,4,3], [5,6,4])) // [7, 0, 8]