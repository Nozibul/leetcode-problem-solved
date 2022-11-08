const isPalindrome = function (palNum){
    let revNum = parseInt(palNum.toString().split('').reverse().join(''));
    if(revNum === palNum){
        return true ;
    }
    return false ;

}
console.log(isPalindrome(10));
