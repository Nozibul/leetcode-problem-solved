package main

import "fmt"

func countBinarySubstrings(s string) int {
	count := 0

	check := func(l, r int) {
		currentCount := 1

		for l >= 1 && r < len(s)-1 {
			if s[l-1] == s[l] && s[r+1] == s[r] {
				currentCount++
				l--
				r++
			} else {
				break
			}
		}

		count += currentCount
	}

	for i := 1; i < len(s); i++ {
		if s[i] != s[i-1] {
			check(i-1, i)
		}
	}

	return count
}

func main() {
	fmt.Println(countBinarySubstrings("00110011")) // Output: 6
}
