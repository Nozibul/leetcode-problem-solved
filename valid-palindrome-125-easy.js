const isPalindrome = function(palNum){
    const regEx = /[\W_]/g ;
    const normalizeStr  = palNum.toLowerCase().replace(regEx, '');
    let revStr =  normalizeStr.split('').reverse().join('');

   if(revStr === normalizeStr){
     return true ;
   }
   return false;

}
console.log(isPalindrome(''));