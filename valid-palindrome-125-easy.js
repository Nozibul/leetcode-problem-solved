const isPalindrome = function(palNum){
    const regEx = /[\W_]/g ;
    const normalizeStr  = palNum.toLowerCase().replace(regEx, '');
 
    let left = 0;
    let right = normalizeStr.length-1;
    
    while(left < right){
      if(normalizeStr[left] !== normalizeStr[right]) return false ;
      left++
      right--
    }
    return true

}
isPalindrome('race_car');