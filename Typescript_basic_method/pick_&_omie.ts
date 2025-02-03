interface Person{
    f_name:string;
    l_name:string;
    age:number;
}

type omitPerson = Omit<Person,"l_name">;

const P1: omitPerson = {
    f_name:"kkt",
    age:22
}                         //here l_name property not use..,

console.log(P1);

type  PickPerson = Pick<Person,"f_name">;

const P2: PickPerson = {
    f_name:"kkt",
    
     //age:22,          //here age show the error;
}  





