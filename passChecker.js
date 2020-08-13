function validator(passowrd, username){
    if(passowrd.length < 8 ){
        return 'Your password must be 8 characters long';
    }
    else if (passowrd.indexOf(' ') !== -1){
        return 'Your password must not contain space';
    }
    else if (passowrd.indexOf(username) !== -1){
        return 'Your password must not contain username';
    }
    else return 'Your password is strong enough';
}

var check = validator('Samyung3313', 'Samsu');

console.log(check);

