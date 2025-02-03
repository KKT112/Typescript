
function abcd(name :string,age:number,another_fun : (para1:string)=>void):void{

    another_fun("hello");

}

 abcd("kkt",23,(para1:string)=>{

    console.log(para1);
})


