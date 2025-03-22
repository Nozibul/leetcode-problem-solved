package main

import "fmt"

func sumOddLengthSubarrays(arr []int) int {
	res := 0
	n := len(arr)

	for i, num := range arr {
		cnt := ((i+1)*(n-i) + 1) / 2
		res += num * cnt
	}

	return res
}

func main() {
	arr := []int{1, 4, 2, 5, 3}
	fmt.Println(sumOddLengthSubarrays(arr)) // Output: 58
}
