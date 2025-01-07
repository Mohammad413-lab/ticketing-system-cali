import { showErrorMessage } from "./functions/showerror.js";

let signUpButton=document.getElementById("signupbtn")

signUpButton.addEventListener("click", function() {
   let errorName=document.querySelectorAll('p')[0];
   let errorphone=document.querySelectorAll('p')[2];
   let errorEmail=document.querySelectorAll('p')[1];
   let errorPassword=document.querySelectorAll('p')[3];
   let errorConfirmPassword=document.querySelectorAll('p')[4];
   let userName= document.querySelectorAll('.input1')[0];
   let email=document.querySelectorAll('.input1')[1];
   let phone=document.querySelectorAll('.input1')[2];
   let password=document.querySelectorAll('.input1')[3];
   let confirmPassword=document.querySelectorAll('.input1')[4];
   let checkName=showErrorMessage(userName,errorName,"name");
   let checkEmail=showErrorMessage(email,errorEmail,"email");
   let checkPhone=showErrorMessage(phone,errorphone,"phone");
   let checkPassword=showErrorMessage(password,errorPassword,"password");
   let checkConfirmPassword=showErrorMessage(confirmPassword,errorConfirmPassword,"conf");
     

    if(checkName && checkEmail && checkPhone && checkPassword && checkConfirmPassword ){
          
           if(confirmPassword.value != password.value){
               errorConfirmPassword.textContent="not match your password";
               errorConfirmPassword.style.display="block";
           }
         
        
    }
    
});
