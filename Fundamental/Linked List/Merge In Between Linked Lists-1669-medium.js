/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let curr = list1;
    let prev = null;

    for (let i = 0; i < a; i++) {
        prev = curr;
        curr = curr.next;
    }
    let n = b - a;
    let next = curr.next;

    while (n > 0) {
        curr = curr.next;
        next = curr.next;
        n--;
    }
    prev.next = list2;
    let newCurr2 = list2;
    while (newCurr2.next) {
        newCurr2 = newCurr2.next;
    }
    newCurr2.next = next;
    return list1;
};
console.log(mergeInBetween([0,1,2,3,4,5,6], 2 , 5, [1000000,1000001,1000002,1000003,1000004]));
// output: [0,1,1000000,1000001,1000002,1000003,1000004,6]