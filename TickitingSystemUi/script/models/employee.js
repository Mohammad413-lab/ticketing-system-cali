import { UserModel } from "./usermodel.js";

export class EmployeeModel extends UserModel{
   constructor(userId=0,userName="Ahmad mohammad ahmad",email="",phone,password="",salary=0,job="unkown"){
    super(userId,userName,email,phone,password);
    this.salary=salary;
    this.job=job;
   }
}

export class EmployeeInfo{
    constructor(empID=0,empName="unkown"){
        this.empID=empID;
        this.empName=empName;
    }
}