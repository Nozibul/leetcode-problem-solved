package main

import (
	"fmt"
)

func smallestNumber(pattern string) string {
	n := len(pattern)
	result := make([]byte, n+1)
	stack := make([]byte, 0)
	current := byte('1')

	for i := 0; i <= n; i++ {
		stack = append(stack, current)
		current++

		// When we hit 'I' or end of pattern, pop elements from stack and place in result
		if i == n || pattern[i] == 'I' {
			for len(stack) > 0 {
				top := len(stack) - 1
				result[i-top] = stack[top]
				stack = stack[:top]
			}
		}
	}

	return string(result)
}

func main() {
	// Example pattern to test
	pattern := "DID"
	fmt.Println("Smallest number for pattern", pattern, "is", smallestNumber(pattern))

	pattern = "IDID"
	fmt.Println("Smallest number for pattern", pattern, "is", smallestNumber(pattern))

	pattern = "III"
	fmt.Println("Smallest number for pattern", pattern, "is", smallestNumber(pattern))

	pattern = "DD"
	fmt.Println("Smallest number for pattern", pattern, "is", smallestNumber(pattern))
}
