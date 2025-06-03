package main

import "fmt"

func findChampion(n int, edges [][]int) int {
	// Track in-degrees of each node
	ind := make(map[int]int)

	// Count incoming edges for each node
	for _, edge := range edges {
		u, v := edge[0], edge[1]
		ind[v]++
	}

	// Find nodes with no incoming edges (in-degree = 0)
	var ans []int
	for u := 0; u < n; u++ {
		if ind[u] == 0 { // nodes not in map have 0 in-degree by default
			ans = append(ans, u)
		}
	}

	// Return the champion if there's exactly one, otherwise -1
	if len(ans) == 1 {
		return ans[0]
	}
	return -1
}

func main() {
	fmt.Println(findChampion(3, [][]int{{0, 1}, {1, 2}}))         // 0
	fmt.Println(findChampion(4, [][]int{{0, 1}, {1, 2}, {2, 3}})) // 0
}
