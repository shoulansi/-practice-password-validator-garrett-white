const readline = require('readline-sync');


let password;
let passwordValid;
let upperCaseValid;
let numberValid;

do{
    passwordValid = true;
    upperCaseValid = false;
    numberValid = false;

    password = readline.question("Please Enter a Secure Password.");
    if (password.length < 8){
        console.log("Password must contain 8 or more characters.");
        passwordValid = false;
    }
    
    for(let i = 0; i < password.length; i++) {
        let alphabet = password.charAt(i);
        if(alphabet >= "A" && alphabet <= "Z"){
            upperCaseValid = true;
            break;
        }
    }
    
    if(!upperCaseValid){
        console.log("Password must contain an Uppercase letter.");
        passwordValid = false;
    }

    for(let i = 0; i< password.length; i++){
        let numbers = password.charAt(i);
        if(numbers >= "0" && numbers <= "9"){
            numberValid = true;
            break;
        }
    }

    if(!numberValid){
        console.log("Your password must contain a number.");
        passwordValid = false;
    }

    if(password.length >= 8 && upperCaseValid && numberValid) {
        console.log("Success!");
        break;
    } else {
        console.log("Password does not meet requirements.");
    }

}while (password.length<8 || !upperCaseValid || !numberValid);
