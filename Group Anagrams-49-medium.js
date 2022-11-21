const groupAnagrams = function(strs) {
    let hashTable = {};

    for(let elm of strs){
        const sorted  = elm.split('').sort().join('')
        if(hashTable[sorted]){
            hashTable[sorted].push(elm)
        }else{
            hashTable[sorted] = [elm]
        }
    }
    
    return Object.values(hashTable);
    
};
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));