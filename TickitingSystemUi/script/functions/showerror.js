function showErrorMessage(input,message,type){

    if(input.value ==""){
        message.textContent=type!="conf"?"please enter your " + type:"please confirm your password";
        message.style.display="block";
        return false;
    }else{
        message.style.display="none";
        if(type=="phone"){
            if(input.value.length==10){
                let check=input.value == String(parseInt(input.value));
                if(check){
                    return check;
                }else{
                    message.textContent="enter valid number";
                    message.style.display="block";
                    return check;
                }

            }else{
                message.textContent="must be 10 numbers";
                message.style.display="block";
                return false
            }
        }
        return true;
    }
}

export{ showErrorMessage };