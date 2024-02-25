const firstUniqChar = function(s) {
     let hashTable = {};

     for(let elm of s){
        hashTable[elm] = (hashTable[elm] || 0) + 1 ;
     }

     for(let i = 0; i <s.length; i++){
         if(hashTable[s[i]] === 1){
            return i ;
         }
     }
     return -1 ;
};
console.log(firstUniqChar("loveleetcode"))