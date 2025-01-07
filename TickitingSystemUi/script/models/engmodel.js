import { EmployeeModel } from "./employee";

export class EngineerModel extends EmployeeModel{
   constructor(userId=0,userName="Ahmad mohammad ahmad",email="",phone,password="",salary=0,job="unkown",rate){
    super(userId,userName,email,phone,password,salary,job);
    this.rate=rate;
   }
  
}