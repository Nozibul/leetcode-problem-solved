package main

import (
	"bytes"
	"fmt"
)

func decodeMessage(key string, message string) string {
	mapping := make(map[rune]byte)
	mapping[' '] = ' ' // Space remains unchanged

	nextChar := byte('a')
	for _, ch := range key {
		if _, exists := mapping[ch]; !exists && ch != ' ' {
			mapping[ch] = nextChar
			nextChar++
		}
	}

	var result bytes.Buffer
	for _, ch := range message {
		result.WriteByte(mapping[ch])
	}

	return result.String()
}

func main() {
	key := "the quick brown fox jumps over the lazy dog"
	message := "vkbs bs t suepuv"
	decoded := decodeMessage(key, message)
	fmt.Println(decoded) // Output: "this is a secret"
}
