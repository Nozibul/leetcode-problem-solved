/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let fast = head;

  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};

console.log(hasCycle([1,2], 0));
