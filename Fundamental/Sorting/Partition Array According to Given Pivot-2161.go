package main

import (
	"fmt"
)

func pivotArray(nums []int, pivot int) []int {
	n := len(nums)
	ans := make([]int, n)

	lessI := 0        // Pointer for elements less than pivot
	greaterI := n - 1 // Pointer for elements greater than pivot

	for i := 0; i < n; i++ {
		if nums[i] < pivot {
			ans[lessI] = nums[i]
			lessI++
		}
		if nums[n-1-i] > pivot {
			ans[greaterI] = nums[n-1-i]
			greaterI--
		}
	}

	// Fill the remaining positions with pivot
	for lessI <= greaterI {
		ans[lessI] = pivot
		lessI++
	}

	return ans
}

func main() {
	nums := []int{9, 12, 5, 10, 14, 3, 10}
	pivot := 10
	result := pivotArray(nums, pivot)
	fmt.Println("Rearranged Array:", result)
}
