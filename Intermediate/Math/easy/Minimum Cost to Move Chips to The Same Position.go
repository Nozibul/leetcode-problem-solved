package main

import (
	"fmt"
)

func minCostToMoveChips(chips []int) int {
	odd, even := 0, 0
	for _, c := range chips {
		if c%2 == 0 {
			even++
		} else {
			odd++
		}
	}

	if even < odd {
		return even
	}

	return odd
}

func main() {
	chips := []int{1, 2, 3} // তুমি এখানে নিজের ইনপুট দিতে পারো
	result := minCostToMoveChips(chips)
	fmt.Println("Minimum cost to move chips:", result)
}
