function randomNum(array){
    Idx = Math.floor(Math.random()*array.length);
    return Idx;
}

function cardGenerator(){
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K', 'A'];
    let suits = ['Diamonds', 'Spades', 'Hearts', 'Clubs'];

    rankIdx = randomNum(ranks);
    rank = ranks[rankIdx];

    suitIdx = randomNum(suits);
    suit = suits[suitIdx];

    return {suit: suit, rank: rank};
}

genertor = cardGenerator();

console.log(genertor);