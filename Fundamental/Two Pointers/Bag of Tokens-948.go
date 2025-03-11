package main

import (
	"fmt"
	"slices"
)

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func bagOfTokensScore(tokens []int, power int) int {
	score := 0
	best := 0
	slices.Sort(tokens) // টোকেনগুলো ছোট থেকে বড় সাজানো হচ্ছে
	l, r := 0, len(tokens)-1

	for l <= r {
		if power >= tokens[l] { // যদি পাওয়ার দিয়ে টোকেন নেওয়া যায়
			score++
			best = max(best, score)
			power -= tokens[l]
			l++
		} else if score > 0 && power < tokens[r] { // যদি স্কোর খরচ করে পাওয়ার বাড়ানো যায়
			score--
			power += tokens[r]
			r--
		} else {
			break
		}
	}
	return best
}

func main() {
	tokens := []int{100, 200, 300, 400}
	power := 200
	fmt.Println("Max Score:", bagOfTokensScore(tokens, power))
}
