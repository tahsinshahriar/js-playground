let num = 105;

for (let i= 2; i<num; i++){
    if(num%i == 0){
        var result = false;
        break;
    }
}

if (result == false){
    console.log(num + " is not a prime number.");
}
else{
    console.log(num + " is a prime number.")
}