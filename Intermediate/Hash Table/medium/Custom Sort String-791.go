package main

import (
	"fmt"
)

func customSortString(order string, s string) string {
	counter := make(map[rune]int)
	for _, r := range s {
		counter[r]++
	}

	var result []rune
	for _, r := range order {
		if n, ok := counter[r]; ok {
			for i := 0; i < n; i++ {
				result = append(result, r)
			}
			delete(counter, r)
		}
	}

	for r, n := range counter {
		for i := 0; i < n; i++ {
			result = append(result, r)
		}
	}

	return string(result)
}

func main() {
	order := "cba"
	s := "abcdabc"

	sortedString := customSortString(order, s)
	fmt.Println("Sorted string:", sortedString)
}
