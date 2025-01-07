
import { TeckitModel } from "./teckitmodel.js";
import { EmployeeInfo } from "./employee.js";

export class ReviewModel{
  
    constructor(fromDispatcher=new EmployeeInfo(),assignTo=new EmployeeInfo(),ticket=new TeckitModel()){
        this.fromDispatcher=fromDispatcher;
        this.assignTo=assignTo;
        this.ticket=ticket;
       
    }

}

