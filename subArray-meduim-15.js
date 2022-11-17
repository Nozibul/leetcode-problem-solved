
const subArraySums = (num, k)=>{
   const hashTable = {'0':1};  
   let sum = 0;
   let result = 0; // 2
   for (let i = 0; i < num.length; i++){
     sum = sum + num[i]; 
     
     if([sum-k] in hashTable){
        result = result + hashTable[sum-k] ; 
      }
      hashTable[sum]  = (hashTable[sum] || 0) + 1 ;
      
   }
   return result; 
   

}
console.log(subArraySums([1,1,1],2));// { '0': 1, '1': 1, '2': 1, '3': 1 }
