
import { showErrorMessage } from "./functions/showerror.js";


let logInButton=document.getElementById("loginbtn");

logInButton.addEventListener("click", function() {
    let emaileOrPhoneErrorMessage=document.querySelectorAll('p')[0];
    let passwordErrorMessage=document.querySelectorAll('p')[1];
    let emailOrPhon= document.querySelectorAll('.input1')[0];
    let password=document.querySelectorAll('.input1')[1];
    
    let checkEmail=showErrorMessage(emailOrPhon,emaileOrPhoneErrorMessage,"email")
    let checkPassword= showErrorMessage(password,passwordErrorMessage,"password")
    if(checkEmail && checkPassword){

         
        
    }
    
});

