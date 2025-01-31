//1.numbers


let num:Number=3.4;
console.log(num);

//1.1method of numbers

let num2:Number = 123.4556;
console.log(num2.toExponential());
console.log(num2.toPrecision(4));
console.log(num2.toFixed(1));
console.log(num2.toLocaleString());

//tuples

let arr:[Number,String]=[3,"hello"];
console.log(arr);


//enums =>one type of object but use with = sign;

enum Good{
    enum3="abc",
    enum4="def"
}
console.log(Good.enum3);

//string

let a:String = "hello world";
console.log(a);

//any 

let b; //not declare that case any
b=1.2
b="xyz"
console.log(b);

//unknown

let abc:unknown;
abc=12;
abc="kuldeep";

if(typeof abc === "number"){
    console.log(abc);
}

//void => if not return then void

function delta():void{
console.log("hii, bro");
}

//null and multiple asssign with |

let fruit : string | null = " " //"hello"

//Never : that variable can be assign at th enext statement can be not printed and never show..,







   






