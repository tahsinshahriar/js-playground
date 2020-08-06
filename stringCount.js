function count(string){
    var count = 0;
    for(i = 0; i<string.length; i++){
        count++;
    }
    return count;
}
var name = "Nini"
let result = count(name);

console.log(name, "has", result, "words in it.");
