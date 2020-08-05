function fibonacci(n){
    if (n == 0){
        return [0];
    }
    else if (n == 1){
        return [0, 1];
    }
    else{
        fibo = fibonacci(n-1);
        next = fibo[n-1] + fibo[n-2];
        fibo.push(next);
        return fibo;
    }
}

let num = 10;
let result = fibonacci(num);

console.log("Fibonacci series of " + num + " is " + result);