package main

import "fmt"

func decompressRLElist(nums []int) []int {
	var result []int

	for i := 0; i < len(nums); i += 2 {
		for count := 0; count < nums[i]; count++ {
			result = append(result, nums[i+1])
		}
	}
	return result
}

func main() {
	nums := []int{1, 2, 3, 4}
	fmt.Println(decompressRLElist(nums)) // Output: [2,4,4,4]
}
