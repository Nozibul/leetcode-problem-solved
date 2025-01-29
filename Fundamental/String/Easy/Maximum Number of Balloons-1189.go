package main

import (
	"fmt"
)

func maxNumberOfBalloons(text string) int {
	m := make(map[rune]int)
	for _, r := range text {
		m[r]++
	}
	return min(m['b'], m['a'], m['l']/2, m['o']/2, m['n'])
}
func main() {
	fmt.Println(maxNumberOfBalloons("nlaebolko"))
}
