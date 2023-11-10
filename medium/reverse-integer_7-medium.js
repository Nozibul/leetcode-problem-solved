
const reverseNum = function(n) {
    let revNum = parseInt(n.toString().split('').reverse().join('')) * Math.sign(n) ;

    if(revNum > Math.pow(2, 31) || revNum < Math.pow(-2, 31)){
        return 0;
    }
    return revNum ;  
 } 

 console.log(reverseNum(-2147483655)); // output: 0






// console.log(Math.pow(2,31)); // 2147483648
// console.log(Math.pow(-2,31)); //-2147483648
// console.log(Math.clz32(-2147483651));

function revInt(num){
    let revNum = num.toString().split('').reverse().join('') ;
    if(revNum.endsWith('-')){
        revNum = "-" +  revNum.slice(0, revNum.length-1)
    }
    return parseInt(revNum); 
   
}
revInt(83651)
