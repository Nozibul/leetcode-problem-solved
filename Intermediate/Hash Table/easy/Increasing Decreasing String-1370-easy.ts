function sortString(s: string): string {
     let length = s.length;
     let flag = true;
     let res = "";
     const arr = new Array(26).fill(0);
     for (let i = 0; i < length; i++) arr[(s[i] as any).charCodeAt() - 97]++;

     function append(index: number) {
          res += String.fromCharCode(index + 97);
          arr[index]--;
          length--;
     }

     while (length) {
          if (flag) for (let i = 0; i < arr.length; i++) if (arr[i]) append(i);
          if (!flag)
               for (let i = arr.length - 1; i >= 0; i--) if (arr[i]) append(i);
          flag = !flag;
     }
     return res;
}
console.log(sortString("aaaabbbbcccc"));
/* 
  Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"
   */
