import { priorityColor } from "./functions/priocolor.js";
import { blue,red,coolBlackColor,green,yelow,lightBlue } from "./colors.js";
import { disabledBtn } from "./functions/disablebutton.js";
import { ReviewModel } from "./models/reviewmodel.js";
import { TeckitModel } from "./models/teckitmodel.js";
import{showList}from "./functions/filterlist.js";
import{UserInfoModel} from "./models/usermodel.js"
let currentStatus={
    "0":0,
    "1":1,
    "2":2,
    "3":3,
    "4":4
};

function changeColorState(num,color){
    switch(num){
        case 0:color.style.backgroundColor=lightBlue;
        break;
        case 1:color.style.backgroundColor=red;
        break;
        case 2:color.style.backgroundColor=yelow;
        break;
        case 3:color.style.backgroundColor=coolBlackColor;
        break;
        case 4:color.style.backgroundColor=green;
    }


}

let mainEngUl=document.getElementById("engul");


function assignTicketList(reviewModel){

   
    let listLi=document.createElement('li');
    listLi.classList.add("list-item");
    listLi.innerHTML=`
                <div style="display:flex; justify-content: space-between;  padding-right:5px;" >
               

                       <div style="display:flex;">
                         <p class="p-rev">From </p>
                          <i class="fa-solid fa-share-from-square list-icon-size"></i>
                         <p  class="p-rev-t">Dispatcher Name</p>
                       </div>

                     <div class="timercontainer">
                           <div>
                         <span id="hours" class="timerfont">00</span><span class="timerfont">:</span><span id="minutes" class="timerfont">00</span><span class="timerfont">:</span><span id="seconds" class="timerfont">00</span>
                          </div>

                    </div>
                        </div>
                      <div class="to-margin">
                         <p class="p-rev">User name </p>
                          <div style="display:flex; flex-direction:row;"> 
                           <i class="fa fa-user list-icon-size" aria-hidden="true"></i>
                           <p id="username" class="p-rev-t">khalid ahmad mansour</p>
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
           
                 <div class="spacebetween">
                    <div class="to-margin">
                        <p class="p-rev">User phone</p>
                        <div style="display:flex; flex-direction:row;">
                        <i class="fa fa-phone list-icon-size" aria-hidden="true"></i>
                        <p id="phone" class="p-rev-t">0797699743</p>
                        </div>
                    </div>
                     <div class="to-margin">
                         <p class="p-rev">Created at</p>
                        <div style="display:flex; flex-direction:row;">
                         <i class="fa fa-calendar list-icon-size" aria-hidden="true"></i>
                         <p id="createdid" class="p-rev-t">12-11-2025</p>
                         </div>
                     </div>
                     <div class="to-margin">
                         <p class="p-rev">Priority</p>
                       <div style="display:flex; flex-direction:row;">
                         <i class="fa fa-share list-icon-size" aria-hidden="true"></i>
                         <p id="priotext" class="p-rev-t">Low</p>
                         </div>
                     </div>
                     <div class="to-margin">
                     <p class="p-rev">Current status </p>
                 <div style="display:flex; flex-direction:row;">
                     <select id="selectstatus" class="custom-select">
                         <option value="0">Under maintenance</option>
                         <option value="1">Pending</option>
                         <option value="2">Reassign</option>
                         <option value="3">Unrelated</option>
                         <option value="4">Issue solved</option>
                     </select>
                    
                     <div id="statuscolor" class="simplec">  </div>
                    
                </div>
                     </div>

                   
                 </div>
                    <div class="to-marginrow">
                    <div></div>
                    <div>
                    <button id="updatestatus" class="revbtn" >Update</button>
                    <button id="acceptstatus" class="revbtn" >Accept</button>
                    </div>
                   
                    </div>
                 `;
                  mainEngUl.appendChild(listLi);
              
                 let selectedStatus=listLi.querySelector("#selectstatus");
                 let statusColor=listLi.querySelector("#statuscolor");
                 let updateStatusBtn=listLi.querySelector("#updatestatus");
                 let phoneNumber=listLi.querySelector("#phone");
                 let acceptStatuBtn=listLi.querySelector("#acceptstatus");
                 acceptStatuBtn.style.backgroundColor=blue;
                 let title=listLi.querySelector("#titleid");
                 let descr=listLi.querySelector("#descid");
                 let userNamee=listLi.querySelector("#username");
                 
                 let prioText=listLi.querySelector("#priotext");
                 let createdAt=listLi.querySelector("#createdid");
                 acceptStatuBtn.style.background="#618B51";
                 title.textContent="حدث خطأ";
                 descr.textContent="Hello, everyone! This is the LONGEST TEXT EVER! I was inspired by the various other  on the internet, and I wanted to make my own. So here it is! This is going to be a WORLD RECORD! This is actually my third attempt at doing this. The first time, I didn't save it. The second time, the Neocities editor crashed. Now I'm writing this in Notepad, then copying it into the Neocities editor instead of typing it directly in the Neocities editor to avoid crashing. It sucks that my past two attempts are gone now. Those actually got pretty long. Not the longest, but still pretty long. I hope this one won't get lost somehow. Anyways, let's talk about WAFFLES! I like waffles. Waffles are cool. Waffles is a funny word. There's a Teen Titans Go episode called  where the word  is said a hundred-something times. It's pretty annoying. There's also a Teen Titans Go episode about Pig Latin. Don't know what Pig Latin is? It's a language where you take all the consonants before the first vowel, move them to the end, and add '-ay' to the end. If the word begins with a vowel, you just add '-way' to the end. For example,  becomes . I've been speaking Pig Latin fluently since the fourth grade, so it surprised me when I saw the episode for the first time. I speak Pig Latin with my sister sometimes. It's pretty fun. I like speaking it in public so that everyone around us gets confused. That's never actually happened" ;
                 
                 userNamee.textContent=reviewModel.ticket.userModel.userName;
                 phoneNumber.textContent=reviewModel.ticket.userModel.userPhone;
                 prioText.textContent=reviewModel.ticket.priority;
                 priorityColor(prioText);
                 createdAt.textContent="12-11-2025";
                 selectedStatus.addEventListener('change',function(){
                    changeColorState(currentStatus[selectedStatus.value],statusColor);
                 });
                 acceptStatuBtn.addEventListener('click',function(){
                    disabledBtn(acceptStatuBtn);
                    acceptStatuBtn.style.background=green; 
                    acceptStatuBtn.textContent="Accepted";
                 });      
     
 }

 let lowBtn=document.getElementById("lowbutton");
 let medBtn=document.getElementById("mediumbutton") ;
 let highBtn=document.getElementById("highbutton");
 let allBtn=document.getElementById("allbutton");

 let listOfAssigned=[ new ReviewModel("ahmad khaled sami",920,new TeckitModel("dispatcher name","issue",new UserInfoModel("sami naser saad",0))),
    new ReviewModel("ahmad khaled sami",920,new TeckitModel("","issue",new UserInfoModel("abd al rahman abd",0),"Some issue","high")),
    new ReviewModel("ahmad khaled sami",920,new TeckitModel("","issue",new UserInfoModel("abd al rahman abd",0),"Some issue","medium")),new ReviewModel("ahmad khaled sami",920,new TeckitModel("dispatcher name","issue",new UserInfoModel("sami naser saad",0))),
    new ReviewModel("ahmad khaled sami",920,new TeckitModel("","issue",new UserInfoModel("abd al rahman abd",0),"Some issue","high")),
    new ReviewModel("ahmad khaled sami",920,new TeckitModel("","issue",new UserInfoModel("abd al rahman abd",0),"Some issue","medium")),new ReviewModel("ahmad khaled sami",920,new TeckitModel("dispatcher name","issue",new UserInfoModel("sami naser saad",0))),
    new ReviewModel("ahmad khaled sami",920,new TeckitModel("","issue",new UserInfoModel("abd al rahman abd",0),"Some issue","high")),
    new ReviewModel("ahmad khaled sami",920,new TeckitModel("","issue",new UserInfoModel("abd al rahman abd",0),"Some issue","medium")),new ReviewModel("ahmad khaled sami",920,new TeckitModel("dispatcher name","issue",new UserInfoModel("sami naser saad",0))),
    new ReviewModel("ahmad khaled sami",920,new TeckitModel("","issue",new UserInfoModel("abd al rahman abd",0),"Some issue","high")),
    new ReviewModel("ahmad khaled sami",920,new TeckitModel("","issue",new UserInfoModel("abd al rahman abd",0),"Some issue","medium"))];

    for(let i=0 ;i<listOfAssigned.length;i++){
        assignTicketList(listOfAssigned[i]);
      }
let filterProp=[];

lowBtn.addEventListener("click",function(){
    mainEngUl.innerHTML='';
    filterProp=showList(listOfAssigned.filter(ticket=> ticket.ticket.priority.toLowerCase()=="low"),assignTicketList);
});

medBtn.addEventListener("click",function(){
    mainEngUl.innerHTML='';
    filterProp=showList(listOfAssigned.filter(ticket=> ticket.ticket.priority.toLowerCase()=="medium"),assignTicketList);
});

highBtn.addEventListener("click",function(){
    mainEngUl.innerHTML='';
    filterProp=showList(listOfAssigned.filter(ticket=> ticket.ticket.priority.toLowerCase()=="high"),assignTicketList);
});

allBtn.addEventListener("click",function(){
    mainEngUl.innerHTML='';
    filterProp=[];
    showList(listOfAssigned,assignTicketList);
})



 