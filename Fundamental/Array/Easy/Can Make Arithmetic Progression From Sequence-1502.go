package main

import (
	"fmt"
	"sort"
)

func canMakeArithmeticProgression(arr []int) bool {
	sort.Ints(arr)
	dif := arr[1] - arr[0]

	// Start loop from index 2 (skip first comparison)
	for i := 2; i < len(arr); i++ {
		if arr[i]-arr[i-1] != dif {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(canMakeArithmeticProgression([]int{3, 5, 1})) // Output: true
}
