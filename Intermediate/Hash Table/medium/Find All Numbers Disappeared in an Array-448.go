package main

import (
	"fmt"
)

func findDisappearedNumbers(nums []int) []int {
	// Create a slice to keep track of which numbers are present
	present := make([]bool, len(nums))

	// Mark the numbers that are present in the input array
	for _, num := range nums {
		present[num-1] = true
	}

	// Collect the numbers that are missing
	var result []int
	for i, isPresent := range present {
		if !isPresent {
			result = append(result, i+1)
		}
	}

	return result
}

func main() {
	nums := []int{4, 3, 2, 7, 8, 2, 3, 1}
	missingNumbers := findDisappearedNumbers(nums)
	fmt.Println("Missing numbers:", missingNumbers)
}
