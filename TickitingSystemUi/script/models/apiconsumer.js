export class ApiConsumer{
   constructor(){
     this.request=new XMLHttpRequest();
     this.onloadd=null;
     this.data={};
   }



  async get(url) {
        try{
             let response=await this.promise("GET",url);
             return response;
        }catch(error){
            throw error;
        }
    
   
   }

  async post(url){

    try{ 
        let response=await this.promise("POST",url);
        return response;
    } catch(error){throw error;}

  }
  
  async delete(url){
    try{ 
        let response=await this.promise("DELETE",url);
        return response;
    } catch(error){throw error;}
  }
  



    promise(method,url) {
      return new Promise((resolve,reject)=>{
        this.request.open(method,url);
        this.request.responseType="json";
       
        this.request.onload=()=>{

            if(this.onloadd){ this.onloadd();}
          
            if(this.request.status>=200 && this.request.status<300){
                resolve(this.request.response);
            }else{
                reject("some error happenddd -> "+this.request.status);
            }
        }
         if(method=="POST"){
            this.request.setRequestHeader('Content-Type','application/json');
           this.request.send(JSON.stringify(this.data));
        }else{
           this.request.send();
          }
         
      });
   }
   

}