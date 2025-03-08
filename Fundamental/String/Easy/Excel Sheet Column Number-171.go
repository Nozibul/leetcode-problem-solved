package main

import (
	"fmt"
)

func titleToNumber(s string) int {
	col := 0

	for _, char := range s {
		col *= 26
		col += int(char-'A') + 1
	}

	return col
}

func main() {
	fmt.Println(titleToNumber("A"))       // 1
	fmt.Println(titleToNumber("Z"))       // 26
	fmt.Println(titleToNumber("AA"))      // 27
	fmt.Println(titleToNumber("AB"))      // 28
	fmt.Println(titleToNumber("ZY"))      // 701
	fmt.Println(titleToNumber("FXSHRXW")) // বড় ইনপুটের জন্য পরীক্ষা
}
