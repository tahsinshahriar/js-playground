let array = [64, 55, 79, 28, 81, 87, 36, 79, 108, 19, 84, 9];
let max = array[0];
for (i = 0; i < array.length; i++){
    var num = array[i];
    if (num > max){
        max = num;
    }
}

console.log("Max element of this array\n", array, "is", max);