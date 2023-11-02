var judgeCircle = function(moves) {
    let x = 0 ; 
    let y = 0 ;
    for(let i = 0; i< moves.length; i++){
        if(moves[i]==="R") return x++ ;
        else if(moves[i]==="L") return x-- ;
        else if(moves[i]==="U") return y++ ;
        else if(moves[i]==="D") return y-- ;
    }
    return x === 0 && y === 0 ;
}
const result  = judgeCircle("UD");
console.log(result);