package main

import "fmt"

// ProductOfNumbers struct to store prefix products
type ProductOfNumbers struct {
	prefixProducts []int
}

// Constructor initializes the ProductOfNumbers structure
func Constructor() ProductOfNumbers {
	return ProductOfNumbers{
		prefixProducts: []int{1},
	}
}

// Add adds a number to the sequence
func (this *ProductOfNumbers) Add(num int) {
	if num == 0 {
		// If num is 0, reset the prefix products list
		this.prefixProducts = []int{1}
	} else {
		this.prefixProducts = append(
			this.prefixProducts,
			this.prefixProducts[len(this.prefixProducts)-1]*num,
		)
	}
}

// GetProduct returns the product of the last k numbers
func (this *ProductOfNumbers) GetProduct(k int) int {
	n := len(this.prefixProducts)
	if k >= n {
		return 0
	}
	return this.prefixProducts[n-1] / this.prefixProducts[n-k-1]
}

// Main function to test the ProductOfNumbers
func main() {
	obj := Constructor()
	obj.Add(3)
	obj.Add(2)
	obj.Add(5)
	fmt.Println(obj.GetProduct(2)) // Output: 10 (2 * 5)
	obj.Add(4)
	fmt.Println(obj.GetProduct(3)) // Output: 40 (2 * 5 * 4)
	obj.Add(0)
	obj.Add(8)
	fmt.Println(obj.GetProduct(1)) // Output: 8
}
