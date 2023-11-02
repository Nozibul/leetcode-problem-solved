var judgeCircle = function(moves) {
    let x = 0 ; 
    let y = 0 ;
    for(let i = 0; i< moves.length; i++){
        if(moves[i]==="R") x++ ;
        else if(moves[i]==="L") x-- ;
        else if(moves[i]==="U") y++ ;
        else if(moves[i]==="D") y-- ;
    }
    return x === 0 && y === 0 ? true : false;
}
const result  = judgeCircle("UD");
console.log(result);