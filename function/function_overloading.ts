function sum( a:string) : void
function sum(a:number,b:string) :void

function sum(a:any , b ?:any ){
    if(typeof a === "number" && typeof b === "undefined"){
        return "lets try" ;
    }
     else if(typeof a === "number" && typeof b === "string"){
        console.log("nice to meet you")
    }
    else{
        new Error("this is an error in function")          ///throw not run
    }
}

sum("2");
sum(2,"7");