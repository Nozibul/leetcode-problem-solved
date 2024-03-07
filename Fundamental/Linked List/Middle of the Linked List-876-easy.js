/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let twice = head;
    let once = head;
    
    while(twice && twice.next){
        twice = twice.next.next;
        once = once.next
    }
    return once ;
};
console.log([1,2,3,4,5,6]); // [4,5,6]