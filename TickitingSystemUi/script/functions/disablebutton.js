export function disabledBtn(btn,txtAfterclick){ 
    
    if(txtAfterclick=="Reviewed"){
        btn.textContent=txtAfterclick;
    }
    btn.disabled=true;


}


export function unDisabledBtn(btnList){
    for(let i=0;i<btnList.length;i++){
        btnList[i].disabled=false;
    }
}