/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b)=> b-a);
    var result = [];

    for(let card of deck){
        if(result.length) result.unshift(result.pop());
        result.unshift(card);
        }
    return result;
};
console.log(deckRevealedIncreasing([17,13,11,2,3,5,7])); // [2,13,3,11,5,17,7]