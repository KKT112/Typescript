 
 //function pass as another function in type of signature..,l

  function first(fn:(a:string)=>void):void{
    fn("hello bro");
  }
  function second(s2:string){
    console.log(s2);
  }
  first(second);

