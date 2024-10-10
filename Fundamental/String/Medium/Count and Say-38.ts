function countAndSay(n: number): string {
    let base = '1';
    while(n>1){
        let current = '';
        let count = 1;
        for(let i=0; i<base.length; i++){
            if(base[i] === base[i+1]){
                count++;
            }else{
                current += count + base[i];
                count=1;
            }
        }
        base = current;
        n--;
    }
    return base;
};
console.log(countAndSay(4)); // "1211"
console.log(countAndSay(5)); // "111221"