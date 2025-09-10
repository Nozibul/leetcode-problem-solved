/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//  Linked list approch
var middleNode = function(head) {
    let twice = head;
    let once = head;
    
    while(twice && twice.next){
        twice = twice.next.next;
        once = once.next
    }
    return once ;
};