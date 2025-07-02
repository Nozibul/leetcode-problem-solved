/**
 * @param {number[]} excludeValues
 * @param {ListNode} head
 * @return {ListNode}
 */
var modifiedList = function(excludeValues, head) {
    const excludeSet = new Set(excludeValues);
    
    const dummy = new ListNode(0);
    dummy.next = head;
    let curr = dummy;
    
    while (curr.next) {
        if (excludeSet.has(curr.next.val)) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;  
        }
    }
    
    return dummy.next;
};

console.log(modifiedList([2,3,4], [1,2,3,4,5,6])); // [1,5,6]
