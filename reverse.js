function reverseString(string){
    var reverse = "";
    for (i = 0; i < string.length; i++){
        reverse = string[i] + reverse;
    }

    return reverse;
}

var str = "lorem lipsum dolor sit amet";
var rev = reverseString(str);

console.log(rev);