package main

import "fmt"

func sortArrayByParity(nums []int) []int {
	i := 0
	j := len(nums) - 1

	for i < j {
		for i < j && nums[i]%2 == 0 {
			i++
		}
		for i < j && nums[j]%2 == 1 {
			j--
		}

		nums[i], nums[j] = nums[j], nums[i]
	}

	return nums
}

func main() {
	nums := []int{3, 1, 2, 4}
	fmt.Println(sortArrayByParity(nums))        // [4 2 1 3]
	fmt.Println(sortArrayByParity([]int{1, 3})) // [1 3]
}
