package main

import "fmt"

func kidsWithCandies(candies []int, extraCandies int) []bool {
	max := 0

	// Find the maximum number of candies
	for _, candy := range candies {
		if candy > max {
			max = candy
		}
	}

	result := make([]bool, len(candies))

	// Check if each kid can have the maximum number of candies
	for i, candy := range candies {
		result[i] = candy+extraCandies >= max
	}

	return result
}

func main() {
	candies := []int{2, 3, 5, 1, 3}
	extraCandies := 3
	fmt.Println(kidsWithCandies(candies, extraCandies)) // Output: [true, true, true, false, true]
}
