function swap(a, b){
    a = a + b;
    b = a - b;
    a = a - b;
    return [a , b];
}

let result = swap(7, 5);
console.log(result);