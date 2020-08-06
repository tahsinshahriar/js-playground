let array = [64, 55, 79, 28, 81, 87, 36, 79, 108, 19, 84, 9, 79, 28, 81, 87, 5, 79, 28, 81, 87, 36, 79, 10]

let unique = [];

for(i = 0; i < array.length; i++){
    var num = array[i];
    var index = unique.indexOf(num)
    if (index == -1){
        unique.push(num);
    }
}

console.log("The unique array is\n", unique);