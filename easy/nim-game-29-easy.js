var canWinNim = function(n) {
console.log(n%4);
  if(n % 4 !== 0){
        return true
   }else{
    return false
   }
};
console.log(canWinNim(5));
