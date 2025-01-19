package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getIntersectionNode(headA, headB *ListNode) *ListNode {
	curr1 := headA
	curr2 := headB

	flag1 := false
	flag2 := false
	for curr1 != curr2 {
		if curr1.Next == nil && !flag1 {
			curr1 = headB
			flag1 = true
		} else {
			curr1 = curr1.Next
		}

		if curr2.Next == nil && !flag2 {
			curr2 = headA
			flag2 = true
		} else {
			curr2 = curr2.Next
		}
	}

	return curr1
}
