function chalkReplacer(chalk: number[], k: number): number {
    let sum:number=0;

  for(let el of chalk)sum+=el;
  
  let rem:number=k%sum;
  if(rem==0)return 0;

   for(let i=0;i<chalk.length;i++){
      rem-=chalk[i];
      if(rem<0)return i;
   }
   return 0;
};

console.log(chalkReplacer([5,1,5],22)); // 0