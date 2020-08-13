function pangramCheck(sentence){
    let lowercased = sentence.toLowerCase();
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'
    for(let char of alphabets){
        if (!lowercased.includes(char)){
            return 'not a pangram';
        }
    }
    return 'is a pangram';
}

let sentence = "A quick brown fox jumps over the lazy dog";
let result = pangramCheck(sentence);
console.log(result);