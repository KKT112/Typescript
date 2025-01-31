class Vehicle{
    constructor(public name:string, protected model:number,private isgood?:boolean ){
        this.name=name;
        this.model=model;
        this.isgood = isgood;
    }
}
class Car extends Vehicle{
    constructor(name:string,model:number,isgood:boolean){
        super(name,model,isgood);
    }

    change(){
        return `${this.model=2011} and good` ;
                                               // this.num=123, =>we cannot assign the value because that is in private..,
    }
}

let car1 = new Car("bmw",2333,true);
console.log(car1);                 
car1.change();   //we cannot access the data outside of class



      