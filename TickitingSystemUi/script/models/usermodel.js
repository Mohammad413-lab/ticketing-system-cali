export class UserModel{
    constructor(userId=0,userName="Ahmad mohammad ahmad",email="",phone,password=""){
        this.userId=userId;
        this.userName=userName;
        this.email=email;
        this.phone=phone;
        this.password=password;
    }
}


export class UserInfoModel{
    constructor(userName="",UserID=0,userPhone="0753470000"){
        this.userName=userName;
        this.UserID=UserID;
        this.userPhone=userPhone;
    }
}