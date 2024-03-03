/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    
    // Move the fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    
    // If fast is null, it means the list is of length n and the head needs to be removed
    if (!fast) {
        return head.next;
    }
    
    // Move both pointers until fast reaches the end of the list
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    
    // Remove the nth node from the end by updating the next pointer of the (n-1)th node
    slow.next = slow.next.next;
    
    // Return the head of the modified list
    return head;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2)); // [1,2,3,4]