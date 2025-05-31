package main

import (
	"fmt"
	"os"
	"strconv"
)

func getMaximumGenerated(n int) int {
	if n < 2 {
		return n
	}

	a, max := make([]int, n+1), 0

	a[0] = 0
	a[1] = 1

	for i := 2; i <= n; i++ {
		num := a[i/2]

		if i%2 == 1 {
			num += a[(i/2)+1]
		}

		a[i] = num

		if num > max {
			max = num
		}
	}

	return max
}

func main() {
	// Test with different values
	testValues := []int{0, 1, 2, 3, 4, 7, 15, 20}

	fmt.Println("Testing getMaximumGenerated function:")
	fmt.Println("=====================================")

	for _, n := range testValues {
		result := getMaximumGenerated(n)
		fmt.Printf("n = %2d: maximum = %d\n", n, result)
	}

	// Interactive mode - accept command line argument
	if len(os.Args) > 1 {
		if input, err := strconv.Atoi(os.Args[1]); err == nil {
			fmt.Printf("\nCommand line input n = %d: maximum = %d\n", input, getMaximumGenerated(input))
		} else {
			fmt.Printf("Invalid input: %s. Please provide a valid integer.\n", os.Args[1])
		}
	}

	fmt.Println("\nUsage: go run main.go [number]")
	fmt.Println("Example: go run main.go 15")
}
