class UserName{
    constructor(public name:string,public age:number){ }

    getName(){
        return this.name;
    }
    setname(value :string){

        this.name=value;

    }
}

 let user1 = new UserName("kkt",22);

 console.log(user1.getName());
 console.log(user1.setname("tank kuldeep")); // check the 
 