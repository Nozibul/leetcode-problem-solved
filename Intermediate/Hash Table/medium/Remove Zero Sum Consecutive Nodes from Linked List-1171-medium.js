// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeZeroSumSublists = function(head) {
    if (!head) {
        return head;
    }
    // Initialize
    let dummy = new ListNode(0);
    dummy.next = head;

    // Step1: build the prefix sum map
    let curr = dummy
    let prefixSumMap = new Map();
    let runningSum = 0;

    while (curr) {
        runningSum += curr.val;
        prefixSumMap.set(runningSum, curr);
        curr = curr.next;
    }

    // Step 2: build the output
    curr = dummy;
    runningSum = 0;

    while (curr) {
        runningSum += curr.val;
        curr.next = prefixSumMap.get(runningSum).next;
        curr = curr.next;
    }

    return dummy.next;
};

// Create a linked list from the array [1, 2, -3, 3, 1]
let inputArray = [1, 2, -3, 3, 1];
let head = new ListNode(inputArray[0]);
let current = head;
for (let i = 1; i < inputArray.length; i++) {
    current.next = new ListNode(inputArray[i]);
    current = current.next;
}

// Call the function
let result = removeZeroSumSublists(head);

// Convert the resulting linked list to an array for easier visualization
let outputArray = [];
while (result) {
    outputArray.push(result.val);
    result = result.next;
}

console.log(outputArray); // Output: [1, 2, 1]
