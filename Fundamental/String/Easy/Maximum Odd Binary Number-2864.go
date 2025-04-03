package main

import "fmt"

func maximumOddBinaryNumber(s string) string {
	l := len(s)
	res := make([]byte, l)
	index0, index1 := l-2, l-1
	for i := 0; i < l; i++ {
		if s[i] == '0' {
			res[index0] = '0'
			index0--
		} else {
			res[index1] = '1'
			index1 = (index1 + 1) % l
		}
	}
	return string(res)
}
func main() {
	// Test cases
	fmt.Println(maximumOddBinaryNumber("0101")) // Output: "1100"
	fmt.Println(maximumOddBinaryNumber("1110")) // Output: "1011"
	fmt.Println(maximumOddBinaryNumber("0011")) // Output: "1010"
}
