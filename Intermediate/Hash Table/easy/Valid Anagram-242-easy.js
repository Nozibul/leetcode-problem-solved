const isAnagram = function(s, t) {
    const string1 = s.replace(/[^\w]/g, '').toLowerCase();
    const string2 = t.replace(/[^\w]/g, '').toLowerCase();
    
    if(string1.length !== string2.length) return false
    let hashTableA = {};
    let hashTableB = {};
    
    for(let i = 0 ; i < string1.length; i++){  
         hashTableA[string1[i]] = (hashTableA[string1[i]] || 0) + 1
    }

    for (let elm of string2){
        hashTableB[elm] = (hashTableB[elm] || 0 ) + 1
    }

    for(let key in hashTableA){
        if(hashTableA[key] !== hashTableB[key] || !key in hashTableB){
            return false
        }
    }
    return true
    
};
console.log(isAnagram("anagrAm", "nagaram"));