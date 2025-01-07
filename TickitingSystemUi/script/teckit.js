import { TeckitModel ,pr } from "./models/teckitmodel.js";
import { blurContainer } from "./functions/blur.js";
import { rejectColor,blue,red,coolBlackColor,green,yelow,lightBlue, darkBlue ,linearColor} from "./colors.js";
import { priorityColor } from "./functions/priocolor.js";
import { showList } from "./functions/filterlist.js";
import { UserInfoModel } from "./models/usermodel.js";

function checkedInput(input,errorInput){
    let check="";
    input.forEach(radioButton => radioButton.checked?check=radioButton.value:"");
    if(!check==""){
        errorInput.style.display="none";  

        return check;
       }else{
       
           errorInput.style.display="block";
          return check;
       }

}

function tekitStatusBtn(statusButton,status){
    
    switch(status.toLowerCase()){
        case "solved":
            statusButton.style.background=red;
            statusButton.textContent="Close T";
        break;
        case "in review":
        statusButton.style.background=linearColor;
        statusButton.textContent="Update T";
        break;
        default:statusButton.style.visibility ="hidden";
    }

}




let title=document.getElementById("title");  

let description=document.getElementById("desc");

let priorityes=document.getElementsByName("priority");

let issueType=document.getElementsByName("typeissue");
let errorIssueType=document.getElementById("errorType");
let createTeckit=document.getElementById("createteckit");

let teckitmodel=new TeckitModel();

let errorPrio=document.getElementById("errorpriority");

let createPage=document.querySelectorAll(".btnstate")[0];

let ticketsHistory=document.querySelectorAll(".btnstate")[1];

let showCreateTicket=document.getElementById("createT");

let showAllTicket=document.getElementById("allticket");

let isCreatTicketExist=true;

let isTicketHistoryExist=false;

let tBox=document.getElementsByClassName("tbox")[0];

let rateBox=document.getElementsByClassName('stack-container')[0];

let stars=document.getElementsByClassName("starshidden")[0];

let choosinStars=Array.from(stars.children);

let cancelRateBtn=document.getElementById("cancelratebtn");

let rateNumber=0;

let stackCupdate=document.getElementsByClassName("stack-container-update")[0];
 
let textContainer=document.getElementById("txtcontainer");

let rateOrUpdatBtn=document.getElementById("ratebtnok");

let listOfReviewd=[new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue","","","solved"),
    new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue","","","in review"),
    new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue","","","pending"),
    new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue","","","solved"),
    new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue","","","in review"),
    new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue","","","pending"),
    new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue","","","solved"),
    new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue","","","in review"),
    new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue","","","pending"),
    new TeckitModel("","issue",new UserInfoModel("sami naser saad",0),"Some issue","","","pending")
];
let statusColor={
  "solved":green,
  "pending":red,
  "in review":rejectColor,
};

let buttonStatus={
    "blur":function(){
        blurContainer(tBox,'blur(5px)','none'); 
    },

    "close t":function(){
      textContainer.textContent="Rate services for this ticket";
      rateOrUpdatBtn.textContent="Rate"; 
      buttonStatus["blur"]();
      rateBox.style.display='flex';
      rateBox.style.animation = 'rate 0.8s forwards';   
    },
    "update t":function(){

        buttonStatus["blur"](); 
        stackCupdate.style.display="flex";
        stackCupdate.style.animation = 'rate 0.8s forwards'; 

        

    }
};

function defualtStar(ratedStars){
   ratedStars.forEach(star =>star.classList.remove("rated"));
}
function UserTicket(ticket){
    let ticketUserUl=document.getElementById("userticketul");
    let listLi=document.createElement('li');
    listLi.classList.add("list-item");
    listLi.innerHTML=`
        
        <div class="to-margin">
         <p class="p-info">Title </p>
         <p class="p-info-t">software issue</p>
        </div>
       
        <div class="to-margin">
          
         <p class="p-info">Description </p>
         <p class="p-info-t">description issue</p>
        </div>
          <div class="to-margin">
          <p class="p-info">Assigned to </p>
          <p class="p-info-t">khalid mohammad ahmed</p>
         </div> 
        <hr style="height: 1px; background-color: #E8E8E8; border:none;">
       
      <div style="display: flex; justify-content: space-between;"> 
        <div class="to-margin">
         <p class="p-info">Priority </p>
          <i class="fa fa-share list-my-ticket-icon-size" aria-hidden="true"></i>
         <p id="prio" class="p-info-t">Low</p>
        </div>
        <div class="to-margin">
         <p class="p-info">Status </p>
         <p id="status" class="p-info-t">solved</p>
        </div>
         <div class="to-margin"> 
            <p class="p-info">Type</p>
            <i class="fa fa-desktop list-my-ticket-icon-size" aria-hidden="true"></i>
            <p id="issuetype" class="p-info-t">SW</p>
        </div>
        <div class="to-margin">
         <p class="p-info">Created at </p>
         <i class="fa fa-calendar list-my-ticket-icon-size" aria-hidden="true"></i>
         <p class="p-info-t">11-12-2025</p>
        </div>
        <div class="to-margin">
         <p class="p-info">Updated at </p>
          <i class="fa fa-calendar list-my-ticket-icon-size" aria-hidden="true"></i>
         <p class="p-info-t">12-12-2025</p>
        </div>
        <div class="to-margin">
         <p class="p-info">Closed at </p>
          <i class="fa fa-calendar list-my-ticket-icon-size" aria-hidden="true"></i>
         <p class="p-info-t">12-12-2025</p>
        </div>
      
         <div  style="margin-top:3px;"><button id="teckitbtn" class="closedbtn">TTT</button></div>
      </div> `;
      ticketUserUl.appendChild(listLi);
      
      let statusTicketBtn=listLi.querySelector("#teckitbtn");
      let priority=listLi.querySelector("#prio");
      let status=listLi.querySelector("#status");
      status.textContent=ticket.status;
      tekitStatusBtn(statusTicketBtn,status.textContent);
      priorityColor(priority);
      status.style.color=statusColor[status.textContent.toLowerCase()];
      statusTicketBtn.addEventListener("click",function(){
           
          buttonStatus[statusTicketBtn.textContent.toLowerCase()]();

      });

}



cancelRateBtn.addEventListener("click",function(){
    
    defualtStar(choosinStars);
    rateBox.style.animation = 'hiderate 0.5s forwards';
    setTimeout(function(){
        rateBox.style.display='none';
    },500) 
  
    blurContainer(tBox,'none','auto') ;
  

});

ticketsHistory.addEventListener("click",function(){
    if(!isTicketHistoryExist){
        showAllTicket.style.display="block";
        showCreateTicket.style.display="none";
        isTicketHistoryExist=true;
        isCreatTicketExist=false;
        tBox.style.overflow="auto";
    }   
   

});

createPage.addEventListener("click",function(){
    if(!isCreatTicketExist){
        showAllTicket.style.display="none";
        showCreateTicket.style.display="flex";
        isTicketHistoryExist=false;
        isCreatTicketExist=true;
        tBox.style.overflow="hidden";
    } 

});

createTeckit.addEventListener("click", function() {

    let prio=checkedInput(priorityes,errorPrio);
    let issue= checkedInput(issueType,errorIssueType);
     if(prio !="" && issue!=""){
    
      let id=uuid.v4();   
      teckitmodel.title=title.value;
      teckitmodel.description=description.value;
      teckitmodel.id=id;
      teckitmodel.priority=pr[prio];
      console.log(teckitmodel.id);
      console.log(teckitmodel.priority);
     }
      
    }
    
);

choosinStars.forEach((star,index)=>{
   
    star.addEventListener("click",function(){
         rateNumber=0;
        for(let i=0;i<choosinStars.length;i++){
             if(i<=index){
                rateNumber=i+1;
                choosinStars[i].classList.add("rated");
             
             }else{
                choosinStars[i].classList.remove("rated");
             }
        }
        console.log(rateNumber);

    }
);

});


showList(listOfReviewd,UserTicket);