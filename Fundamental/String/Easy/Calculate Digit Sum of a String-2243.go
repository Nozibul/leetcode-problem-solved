package main

import (
	"fmt"
	"strconv"
)

func digitSum(s string, k int) string {
	if len(s) <= k {
		return s
	}

	res := make([]byte, 0)

	for i := 0; i < len(s); i += k {
		end := i + k

		if end > len(s) {
			end = len(s)
		}

		chars := s[i:end]

		var sum int
		for j := 0; j < len(chars); j++ {
			char := chars[j]
			char -= '0'
			sum += int(char)
		}

		res = append(res, []byte(strconv.Itoa(sum))...)
	}

	return digitSum(string(res), k)
}

func main() {
	fmt.Println(digitSum("11111222223", 3))
}
