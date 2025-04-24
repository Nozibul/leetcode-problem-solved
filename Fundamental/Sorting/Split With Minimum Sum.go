package main

import (
	"fmt"
	"slices"
)

func splitNum(num int) int {
	num1, num2, digits := 0, 0, make([]int, 0)
	for ; num > 0; num /= 10 {
		digits = append(digits, num%10)
	}
	slices.Sort(digits)
	for i := 0; i < len(digits); i++ {
		if i&1 == 0 {
			num1 = num1*10 + digits[i]
		} else {
			num2 = num2*10 + digits[i]
		}
	}
	return num1 + num2
}

func main() {
	// Example usage
	num := 4325
	result := splitNum(num)
	fmt.Printf("The result of splitNum(%d) is: %d\n", num, result)
}
