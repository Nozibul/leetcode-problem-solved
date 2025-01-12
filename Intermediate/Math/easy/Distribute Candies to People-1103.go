package main

import "fmt"

func distributeCandies(candies int, num_people int) []int {
	result := make([]int, num_people)
	pidx := 0
	ctr := 1
	for candies > 0 {
		// fmt.Println(pidx, candies, ctr)
		if pidx == num_people {
			pidx = 0
		}
		if candies < ctr {
			result[pidx] += candies
			break
		}
		result[pidx] += ctr
		candies -= ctr
		ctr++
		pidx++
	}
	return result
}

func main() {
	fmt.Println(distributeCandies(7, 4)) // [1,2,3,1]
}
