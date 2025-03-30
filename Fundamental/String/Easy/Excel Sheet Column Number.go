package main

import (
	"fmt"
)

func titleToNumber(columnTitle string) int {

	multiplier := 1
	result := 0

	for i := len(columnTitle) - 1; i >= 0; i -= 1 {
		result += (int(columnTitle[i]) - int('A') + 1) * multiplier
		multiplier *= 26
	}

	return result
}

func main() {
	fmt.Println(titleToNumber("A"))  // Output: 1
	fmt.Println(titleToNumber("Z"))  // Output: 26
	fmt.Println(titleToNumber("AA")) // Output: 27
	fmt.Println(titleToNumber("AB")) // Output: 28
}
