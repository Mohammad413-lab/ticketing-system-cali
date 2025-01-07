import{UserInfoModel} from "./usermodel.js"
import { EmployeeInfo } from "./employee.js";

class TeckitModel{
     
    
    constructor(teckitID=0,title="",userModel=new UserInfoModel,description="",priority="low",assignTo=new EmployeeInfo(),status="Open",createdAt= "12-12-2024",updatedAt="1-1-2025",closedAt="1-2-2024",softwareOrHardware=0){
        this.teckitID=teckitID;
        this.title=title;
        this.description=description;
        this.userModel=userModel;
        this.priority=priority;
        this.status=status;
        this.assignTo=assignTo;
        this.createdAt=createdAt;
        this.updatedAt=updatedAt;
        this.closedAt=closedAt;
        this.createdAt=createdAt
        this.softwareOrHardware=softwareOrHardware;

        

    }
}

let pr={
    "low":0,
    "medium":1,
    "high":2
}
export{TeckitModel , pr};