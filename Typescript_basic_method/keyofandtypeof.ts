
interface Person {
    f_name:string;
    age:number;
    l_name:string;
}

let key : keyof Person;

key = "f_name"  // WE CAN ASSIGN THE KEY OF THE INTERFACE IN THE OBJECT..,

const p2 = {
    "f_name" :'KKT',
    "l_name" :"TANK",
    "age":20,

}

let keys  = typeof p2;
console.log(keys);

let names : keyof  typeof p2;    //typeof me only  p2 ki type name fname,lname and age aa jayega or keyof me all types ka union aa jayega.., 
                                         // 



