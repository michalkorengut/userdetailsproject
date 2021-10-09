export class Users{
   
     nameEnterUser :string;
    id:number;
     phoneUser :string;
     emailUser :string;
    constructor( codeUser:number, nameEnterUser:string, passwordUser:string,  phoneUser :string, emailUser:string, id:number){
  
     this.nameEnterUser= nameEnterUser;
    
     this.phoneUser=phoneUser;
     this.emailUser=emailUser;
     this.id= id;
    }
}