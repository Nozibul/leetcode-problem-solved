package main

import (
	"fmt"
	"slices"
)

func splitNum(num int) int {
	num1, num2 := 0, 0
	digits := make([]int, 0)

	// Extract digits
	for num > 0 {
		digits = append(digits, num%10)
		num /= 10
	}

	// Sort digits in ascending order
	slices.Sort(digits)

	// Alternate assignment to num1 and num2
	for i := 0; i < len(digits); i++ {
		if i%2 == 0 {
			num1 = num1*10 + digits[i]
		} else {
			num2 = num2*10 + digits[i]
		}
	}

	return num1 + num2
}

func main() {
	var num int
	fmt.Print("Enter a number: ")
	fmt.Scan(&num)

	result := splitNum(num)
	fmt.Printf("Result of splitNum(%d) is: %d\n", num, result)
}
