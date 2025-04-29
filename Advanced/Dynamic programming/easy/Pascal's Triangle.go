package main

import "fmt"

func generate(numRows int) [][]int {
	var pascals [][]int

	// C(n,k) = n!/[k!(n-k)!]
	// 1 11 121 1331 14641
	for i := range numRows {
		n := make([]int, i+1)
		for j := 0; j < len(n); j++ {
			if j == 0 || j == len(n)-1 {
				n[j] = 1
			} else {
				n[j] = pascals[i-1][j-1] + pascals[i-1][j]
			}

		}
		pascals = append(pascals, n)
	}

	return pascals
}
func main() {
	fmt.Println(generate(5))
}
