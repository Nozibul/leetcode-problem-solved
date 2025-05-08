package main
import "fmt"
func interpret(command string) string {
    return  strings.ReplaceAll((strings.ReplaceAll(command,"()","o")),"(al)","al")
}

main()=>{
	fmt.Println(interpret("G()(al)")) // Output: "Goal"
	fmt.Println(interpret("G()()()()(al)")) // Output: "Gooooal"
	fmt.Println(interpret("(al)G(al)()()G")) // Output: "alGalooG"
}