

import { TeckitModel,pr } from "./models/teckitmodel.js";
import { priorityColor } from "./functions/priocolor.js";
import { disabledBtn,unDisabledBtn } from "./functions/disablebutton.js";
import { showList } from "./functions/filterlist.js";
import { assignColor,rejectColor,cancelColor ,linearColor} from "./colors.js";
import { UserInfoModel } from "./models/usermodel.js";
import { changeScrollColor } from "./functions/scroll.js";
import { timer } from "./functions/timer.js";
import { changeDesign } from "./functions/changedesign.js";

function isReview(txt){
  return txt=="reviewed"?true:false;
}

let first=`<div class ="stack-list">
                         <div id="warn" class="warning"> <h6 class="txtwarn">
                           Reviewed ticket first</h6> 
                           <button id="okwarn" class="warnbtn">Ok</button>
                          </div>

                <div id="clickable" >
                       <div class="to-margin" style="display:flex; flex-direction:row; justify-content: space-between; gap:50px; padding-right:5px; width:100%">
                        <div style="display:flex;">
                        <p class="p-rev">User name </p>
                        <i class="fa fa-user list-icon-size" aria-hidden="true"></i>
                        <p id="username" class="p-rev-t">khalid ahmad mansour</p>
                        </div>
                        <div class="timercontainer">
                           <div>
                         <span id="hours" class="timerfont">00</span><span class="timerfont">:</span><span id="minutes" class="timerfont">00</span><span class="timerfont">:</span><span id="seconds" class="timerfont">00</span>
                          </div>
                  
                        </div>
                        
                       </div>
                   <div class="to-margin">
                    <p class="p-rev">Title</p>
                    <p id="titleid" class="p-rev-t">-</p>
                   </div>
                   <div class="to-margin">
                    <p class="p-rev">Description </p>
                    <p id="descid" class="p-rev-t-desc scrolldesc">-</p>
                  </div>
                 
          
                <div style="display: flex;  justify-content: space-between; width:100%;  ">
                        <div class="to-margin">
                        <p class="p-rev">User phone</p>
                        <div class="rowitems">
                        <i class="fa fa-phone list-icon-size" aria-hidden="true"></i>
                        <p id="phone" class="p-rev-t">0797699743</p>
                        </div>
                    </div>
                           <div class="to-margin">
                        <p class="p-rev">Created at</p>
                        <div class="rowitems">
                        <i class="fa fa-calendar list-icon-size" aria-hidden="true"></i>
                        <p id="createdid" class="p-rev-t">12-11-2025</p>
                        </div>
                    </div>
                    <div class="to-margin" style=" margin-top:0px">
                      
                        <p class="p-rev">Priority </p>
                        <div class="rowitems">
                        <i class="fa fa-share list-icon-size" aria-hidden="true"></i>
                        <p id="priotext" class="p-rev-t">Low</p>
                        </div>
                    </div>
  
                    <div class="to-margin"> 
                      <p class="p-rev">Type</p>
                      <div class="rowitems">
                      <i class="fa fa-desktop list-icon-size" aria-hidden="true"></i>
                      <p id="issuetype" class="p-rev-t">SW</p>
                      </div>
                    </div>
                
                   
                    <div>
                   
                    </div>
        
           
                </div>
                        <div class="to-marginrow">
          
                   <div class="to-marginrow"  >
                    <p class="p-rev">Maintenance engineer</p>
                     <select class="custom-select">
                        <option value="moha">mohammad ahmad ahmad mohammad </option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                          <option value="moha">mohammad ahmad ahmad mohammad </option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                          <option value="moha">mohammad ahmad ahmad mohammad </option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                          <option value="moha">mohammad ahmad ahmad mohammad </option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                        <option value="moha">mohammad</option>
                        <option value="moha">ahmad</option>
                        <option value="moha">khalid</option>
                    </select>
                    </div>
                    <div class="to-marginrow">
                  <button id="revButton" class="revbtn">Open</button>
                 
                  <button class="assignbtn" id="assignbtn">
                      Assign 
                    <i class="fa-solid fa-check"></i>
                  </button>
          
                  <button class="rejectbtn" id="rejectbtn">Reject 
                    <i class="fa-solid fa-circle-down"></i>
                  </button>
                  <button class="cancelbtn" id="cancelbtn">Cancel 
                    <i class="fa-solid fa-xmark"></i>
                  </button>
                   <button id="sendid" class="revbtn">Send</button> </div>
                   </div>
                </div>  
                `;
let second=  `<div class ="stack-list">
<div id="warn" class="warning"> <h6 class="txtwarn">
  Reviewed ticket first</h6> 
  <button id="okwarn" class="warnbtn">Ok</button>
 </div>

<div id="clickable" >
<div class="to-margin" style="display:flex; flex-direction:row; justify-content: space-between; gap:50px; padding-right:5px; width:100%">
<div style="display:flex;">
<p class="p-rev">User name </p>
<i class="fa fa-user list-icon-size" aria-hidden="true"></i>
<p id="username" class="p-rev-t">khalid ahmad mansour</p>
</div>
<div class="timercontainer">
  <div>
<span id="hours" class="timerfont">00</span><span class="timerfont">:</span><span id="minutes" class="timerfont">00</span><span class="timerfont">:</span><span id="seconds" class="timerfont">00</span>
 </div>

</div>

</div>
<div class="to-margin">
<p class="p-rev">Title</p>
<p id="titleid" class="p-rev-t">-</p>
</div>
<div class="to-margin">
<p class="p-rev">Description </p>
<p id="descid" class="p-rev-t-desc scrolldesc">-</p>
</div>


<div style="display: flex;  justify-content: space-between;   ">
<div class="to-margin">
<p class="p-rev">User phone</p>
<div class="rowitems">
<i class="fa fa-phone list-icon-size" aria-hidden="true"></i>
<p id="phone" class="p-rev-t">0797699743</p>
</div>
</div>
  <div class="to-margin">
<p class="p-rev">Created at</p>
<div class="rowitems">
<i class="fa fa-calendar list-icon-size" aria-hidden="true"></i>
<p id="createdid" class="p-rev-t">12-11-2025</p>
</div>
</div>
<div class="to-margin" style=" margin-top:0px">

<p class="p-rev">Priority </p>
<div class="rowitems">
<i class="fa fa-share list-icon-size" aria-hidden="true"></i>
<p id="priotext" class="p-rev-t">Low</p>
</div>
</div>

<div class="to-margin"> 
<p class="p-rev">Type</p>
<div class="rowitems">
<i class="fa fa-desktop list-icon-size" aria-hidden="true"></i>
<p id="issuetype" class="p-rev-t">SW</p>
</div>
</div>

<div class="to-margin" >
<p class="p-rev">Maintenance engineer</p>
<select class="custom-select">
<option value="moha">mohammad ahmad ahmad mohammad </option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
 <option value="moha">mohammad ahmad ahmad mohammad </option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
 <option value="moha">mohammad ahmad ahmad mohammad </option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
 <option value="moha">mohammad ahmad ahmad mohammad </option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
<option value="moha">mohammad</option>
<option value="moha">ahmad</option>
<option value="moha">khalid</option>
</select>
</div>
<div>

</div>



<div class="to-margin">      
<button id="revButton" class="revbtn">Open</button>

<button class="assignbtn" id="assignbtn">
Assign 
<i class="fa-solid fa-check"></i>
</button>

<button class="rejectbtn" id="rejectbtn">Reject 
<i class="fa-solid fa-circle-down"></i>
</button>
<button class="cancelbtn" id="cancelbtn">Cancel 
<i class="fa-solid fa-xmark"></i>
</button>
<button id="sendid" class="revbtn">Send</button> </div>
</div>


</div>`;               



function teckitList(teckitModel){

 
   let listLi=document.createElement('li');
   listLi.classList.add("list-item");
   listLi.innerHTML=first;


                function pointerEvent(pointer,errorMsg,showWarn=true){
                  switch(showWarn){
                    case true:pointer.style.pointerEvents="none";
                    errorMsg.style.display="flex";
                    break;
                    default:pointer.style.pointerEvents="auto";
                    errorMsg.style.display="none";
                  }
                  
                }

                revUl.appendChild(listLi);
            
               

                let warningMsg=listLi.querySelector("#warn");
               
                let clickableItem=listLi.querySelector("#clickable");

                let okWarning=listLi.querySelector("#okwarn");

                let assignBtn = listLi.querySelector("#assignbtn");

                let rejectBtn = listLi.querySelector("#rejectbtn");

                let cancelBtn = listLi.querySelector("#cancelbtn");

                let sendBtn=listLi.querySelector('#sendid');

                let hours=listLi.querySelector("#hours");

                let minutes=listLi.querySelector("#minutes");

                let seconds=listLi.querySelector("#seconds");

                let title=listLi.querySelector("#titleid");

                let descr=listLi.querySelector("#descid");

                let userName=listLi.querySelector("#username");

                let phoneNumber=listLi.querySelector("#phone");

                let revButton=listLi.querySelector("#revButton");

                let prioText=listLi.querySelector("#priotext");

                let createdAt=listLi.querySelector("#createdid");
      
                title.textContent=teckitModel.title;

                descr.textContent=teckitModel.description;

                userName.textContent=teckitModel.userModel.userName;

                prioText.textContent=teckitModel.priority;

                createdAt.textContent=teckitModel.createdAt;

                phoneNumber.textContent=teckitModel.userModel.userPhone;

              
                priorityColor(prioText);

                timer(hours,minutes,seconds);

                revButton.addEventListener("click",function(){
                  
                  disabledBtn(revButton,"Reviewed");

                });

                sendBtn.addEventListener("click",function(){
                  disabledBtn(sendBtn,"Sent")
                });

                assignBtn.addEventListener("click",function(){
                  if(isReview(revButton.textContent.toLocaleLowerCase())){
                       disabledBtn(assignBtn,"Assigned");
                       unDisabledBtn([rejectBtn,cancelBtn,sendBtn]);
                      }else{
                        pointerEvent(clickableItem,warningMsg);
                      }
                });

                rejectBtn.addEventListener("click",function(){
                  if(isReview(revButton.textContent.toLocaleLowerCase())){
                     disabledBtn(rejectBtn,"Rejected");
                     unDisabledBtn([assignBtn,cancelBtn,sendBtn]);
                }else{
                  pointerEvent(clickableItem,warningMsg);
                }
                });

                cancelBtn.addEventListener("click" , function(){
                  if(isReview(revButton.textContent.toLocaleLowerCase())){
                     disabledBtn(cancelBtn,"Canceld");
                     unDisabledBtn([assignBtn,rejectBtn,sendBtn]);
                }else{
                  pointerEvent(clickableItem,warningMsg);
                }
                });

                okWarning.addEventListener("click",function(){
                  pointerEvent(clickableItem,warningMsg,false);
                });
    
}

let revUl=document.getElementById("revlist");

let navBarReview=document.getElementById("navbarstart");

changeScrollColor(navBarReview);

let listOfReviewd=[new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Hello, everyone! This is the LONGEST TEXT EVER! I was inspired by the various other  on the internet, and I wanted to make my own. So here it is! This is going to be a WORLD RECORD! This is actually my third attempt at doing this. The first time, I didn't save it. The second time, the Neocities editor crashed. Now I'm writing this in Notepad, then copying it into the Neocities editor instead of typing it directly in the Neocities editor to avoid crashing. It sucks that my past two attempts are gone now. Those actually got pretty long. Not the longest, but still pretty long. I hope this one won't get lost somehow. Anyways, let's talk about WAFFLES! I like waffles. Waffles are cool. Waffles is a funny word. There's a Teen Titans Go episode called  where the word  is said a hundred-something times. It's pretty annoying. There's also a Teen Titans Go episode about Pig Latin. Don't know what Pig Latin is? It's a language where you take all the consonants before the first vowel, move them to the end, and add '-ay' to the end. If the word begins with a vowel, you just add '-way' to the end. For example,  becomes . I've been speaking Pig Latin fluently since the fourth grade, so it surprised me when I saw the episode for the first time. I speak Pig Latin with my sister sometimes. It's pretty fun. I like speaking it in public so that everyone around us gets confused. That's never actually happened"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high"),new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue"),new TeckitModel("","issue",new UserInfoModel("mohammad ahmad mahmoud khalid ahmad mahmoud ",0),"Some issue","medium",),
  new TeckitModel("","issue",new UserInfoModel("khalid ahmad mahmoud",0),"Some issue","high")];

    for(let i=0 ;i<listOfReviewd.length;i++){
        teckitList(listOfReviewd[i]);
      }

let filterProp=[];      
    

let lowBtn=document.getElementById("lowbutton");
lowBtn.addEventListener("click",function(){
    revUl.innerHTML='';
    filterProp=showList(listOfReviewd.filter(ticket => ticket.priority.toLowerCase()=="low"),teckitList);

});

let mediumBtn=document.getElementById("mediumbutton");
mediumBtn.addEventListener("click",function(){
    revUl.innerHTML='';
    filterProp=showList(listOfReviewd.filter(ticket => ticket.priority.toLowerCase()=="medium"),teckitList);  
  });

let highBtn=document.getElementById("highbutton"); 
highBtn.addEventListener("click",function(){
    revUl.innerHTML='';
    filterProp=showList(listOfReviewd.filter(ticket => ticket.priority.toLowerCase()=="high"),teckitList);
  });

let allBtn=document.getElementById("allbutton");   
allBtn.addEventListener("click",function(){
    revUl.innerHTML='';
    filterProp=[];
    showList(listOfReviewd,teckitList);
  
  });

console.log(screen.width);
