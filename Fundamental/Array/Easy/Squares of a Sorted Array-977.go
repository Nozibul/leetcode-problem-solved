package main

import "fmt"

func sortedSquares(nums []int) []int {
    pl, pr := 0, len(nums) - 1
    result := make([]int, len(nums))  // Create a result array with the same length as nums
    for i := len(nums) - 1; pl <= pr; i-- {  // Loop until pl <= pr
        if nums[pl]*nums[pl] > nums[pr]*nums[pr] {
            result[i] = nums[pl] * nums[pl]
            pl++
        } else {
            result[i] = nums[pr] * nums[pr]
            pr--
        }
    }
    return result
}

func main() {
    nums := []int{-4, -1, 0, 3, 10}
    result := sortedSquares(nums)
    fmt.Println("Sorted squares:", result)
}
