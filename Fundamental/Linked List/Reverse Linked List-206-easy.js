var reverseList = function(head) {
    let prev = null;
    let curr = head;
    let next = null;
    
    while(curr!== null){
        // save next
        next = curr.next
        // reverse
        curr.next = prev
        // advance prev and curr
        prev = curr
        curr = next
    }
    return prev;
};

const result  = reverseList([1,2,3,4,5]);
console.log(result)//[5,4,3,2,1]