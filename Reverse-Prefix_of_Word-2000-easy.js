const reversePrefix = function(word, ch) {
    let checkWord = word.indexOf(ch)
    let reversed = ""; 
  
    for( let i =  checkWord ; 0 <= i  ; i--){
        reversed += word[i] 
    }   
     for( let i =  checkWord + 1; i< word.length  ; i++){
        reversed += word[i] 
    } 

 
  return (reversed)
    
};
console.log(reversePrefix('abcdefd', 'd')) //"dcbaefd"

