package main

import "fmt"

// canPartition returns true if nums can be split into two subsets with equal sum.
func canPartition(nums []int) bool {
	totalSum := 0
	for _, num := range nums {
		totalSum += num
	}

	// If total sum is odd, we can't split into two equal parts
	if totalSum%2 != 0 {
		return false
	}

	target := totalSum / 2
	dp := make([]bool, target+1)
	dp[0] = true

	for _, num := range nums {
		// iterate backwards so each num is only used once
		for j := target; j >= num; j-- {
			if dp[j-num] {
				dp[j] = true
			}
		}
	}

	return dp[target]
}

func main() {
	testCases := [][]int{
		{1, 5, 11, 5},   // can be partitioned: [1,5,5] vs [11]
		{1, 2, 3, 5},    // cannot be partitioned
		{2, 2, 3, 5},    // cannot be partitioned
		{3, 3, 3, 4, 5}, // can be partitioned
	}

	for _, nums := range testCases {
		fmt.Printf("nums = %v → canPartition? %v\n", nums, canPartition(nums))
	}
}
