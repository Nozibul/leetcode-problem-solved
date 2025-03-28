package main

import (
	"fmt"
	"sort"
)

func majorityElement(nums []int) int {
	sort.Ints(nums)
	mid := len(nums) / 2
	return nums[mid]
}

func main() {
	fmt.Println(majorityElement([]int{3, 2, 3})) // Output: 3
}
