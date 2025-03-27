package main

import "fmt"

// numJewelsInStones counts how many stones are jewels
func numJewelsInStones(jewels string, stones string) int {
	jewelsMap := make(map[rune]bool)

	// Store jewels in a set for quick lookup
	for _, jewel := range jewels {
		jewelsMap[jewel] = true
	}

	result := 0
	// Count how many stones are jewels
	for _, stone := range stones {
		if jewelsMap[stone] {
			result++
		}
	}
	return result
}

func main() {
	fmt.Println(numJewelsInStones("aA", "aAAbbbb")) // Output: 3
}
