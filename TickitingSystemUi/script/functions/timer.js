

export function timer(hour,minutes,second){
    let delay=1000
    let h=0;
    let m =0;
    let s=0;
 function updateTimerUI(){
    if(h==0){
       hour.textContent=String(h).padStart(2,'0');
    }else{
        hour.textContent=String(h);
    }
     minutes.textContent=String(m).padStart(2,'0');
     second.textContent=String(s).padStart(2,'0');
 }   
    setInterval(()=>{
        s++;
        if(s==60){
          s=0;
          m++;
        }
        if(m==60){
           m=0;
           h++;
        }

        updateTimerUI();
    },delay);
}

