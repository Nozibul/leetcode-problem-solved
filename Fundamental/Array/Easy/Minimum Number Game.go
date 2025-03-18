package main

import (
	"fmt"
	"sort"
)

func numberGame(nums []int) []int {
	sort.Ints(nums)
	arr := []int{}

	for i := 0; i < len(nums)-1; i += 2 {
		a := nums[i]
		b := nums[i+1]
		arr = append(arr, b)
		arr = append(arr, a)
	}

	return arr
}

func main() {
	nums := []int{5, 2, 9, 1, 6, 4}
	result := numberGame(nums)
	fmt.Println(result) // Output: [6, 2, 9, 1, 5, 4]
}
