 const sumTwo = (arr, target) =>{
    let hashTable = {}
    
    for(let i = 0; i <arr.length; i++){
       const want = target - arr[i]; // 3 4 3 2
       if(want in hashTable){
          return [ hashTable[want] ,i ] ; // [0 2]
       }
       hashTable[arr[i]] = i; //{'3': 0, '2': 1, }
     }

    }
 
 console.log(sumTwo([3,2,3,4], 6)) // [ 0, 2] 