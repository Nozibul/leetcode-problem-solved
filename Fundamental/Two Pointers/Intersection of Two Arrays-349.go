package main

import (
	"fmt"
)

func intersection(nums1 []int, nums2 []int) []int {
	var count = map[int]bool{}
	var result = []int{}

	for _, num := range nums1 {
		count[num] = true
	}

	for _, num := range nums2 {
		if count[num] {
			result = append(result, num)
			count[num] = false
		}
	}

	return result
}

func main() {
	nums1 := []int{1, 2, 2, 1}
	nums2 := []int{2, 2}
	result := intersection(nums1, nums2)

	fmt.Println("Intersection:", result)
}
