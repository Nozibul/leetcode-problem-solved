const collectDecimal = function(str){
    return +str.match(/(?<=\d.)\d+/g);
}
console.log(collectDecimal("My weight is 60 kg")); // 75