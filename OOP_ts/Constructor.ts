class BootleMaker{
    constructor(public name:string, public size:number,public prise:number,public isgood: string = "true"){  
         
         // modifier variable:type of variable;

        this.name=name;
        this.size=size;
        this.prise=prise;

       if(!isgood){
        this.isgood="true";    //in case of the value already define that case
       }
        
    }

}
 let bottle1 = new BootleMaker("plastic",2,20,);
 console.log(bottle1);

 //optional property and read only property ;

 class Animal{
    constructor(public name:string,public readonly type:string,public age?: number){
        this.name=name;
        this.type=type;
        this.age=age;
    }

    typeChange(){
        // here show the error because that is not change  => return (this.type = "not paaltu"); 
    }
 }

 let animal1 = new Animal("dog","paaltu");  //here age is optional 
 animal1.typeChange();