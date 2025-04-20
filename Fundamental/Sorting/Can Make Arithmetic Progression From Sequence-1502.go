package main

import (
	"fmt"
	"sort"
)

func canMakeArithmeticProgression(arr []int) bool {
	sort.Ints(arr)
	dif := arr[1] - arr[0]
	for i := 0; i < len(arr)-1; i++ {
		if dif != arr[i+1]-arr[i] { // sliding window
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(canMakeArithmeticProgression([]int{3, 5, 1})) // Output: true
}
