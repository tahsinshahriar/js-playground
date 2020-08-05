//defining array for fibonacci series
let fibo = [0, 1];
//defining number to calculate the series
let n = 12;
//loop to calculate
for (i = 2; i <= n; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}

console.log("The fibonnaci series of " + n + " is " + fibo );