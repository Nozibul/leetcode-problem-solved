package main

import (
	"strings"
)

// removeOccurrences removes all occurrences of 'part' from 's'
func removeOccurrences(s string, part string) string {
	idx := strings.Index(s, part)
	for idx != -1 {
		s = s[:idx] + s[idx+len(part):]
		idx = strings.Index(s, part)
	}
	return s
}

// func main() {
// 	// Example usage of removeOccurrences
// 	s := "hellohellohello"
// 	part := "hello"
// 	result := removeOccurrences(s, part)
// 	fmt.Println("Original String:", s)
// 	fmt.Println("Modified String:", result)
// }
