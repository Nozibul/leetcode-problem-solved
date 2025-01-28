package main 

import "strings"

func toGoatLatin(S string) string {
	if len(S) == 0 {
		return ""
	}
	start := 0
	cnt := 0
	var builder strings.Builder
	for i := 0; i < len(S); i++ {
		if S[i] == ' ' {
			cnt++
			builder.WriteString(processWord(S[start:i], cnt))
			builder.WriteString(" ")
			for ; S[i] == ' '; i++ {
			}
			start = i
		}
	}
	cnt++
	builder.WriteString(processWord(S[start:len(S)], cnt))
	return builder.String()
}

func processWord(word string, numA int) string {
	var builder strings.Builder
	switch word[0] {
	case 'A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u':
		builder.WriteString(word + "ma")
	default:
		{
			builder.WriteString(word[1:])
			builder.WriteByte(word[0])
			builder.WriteString("ma")
		}
	}
	for i := 0; i < numA; i++ {
		builder.WriteByte('a')
	}
	return builder.String()
}