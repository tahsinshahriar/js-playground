function fibo(n){
    if (n == 0){
        return 1;
    }
    else if (n == 1){
        return 1;
    }
    else{
        return fibo(n-1) + fibo(n-2);
    }
}

let num = 5;
let result = fibo(num);

console.log("Fibonacci of " + num + " is " + result);