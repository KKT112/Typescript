//promise..,

async function exampleAsyncFunction(): Promise<string> {
    return "Hello, TypeScript!";
}

const ab = exampleAsyncFunction();
console.log(ab);

//returntype..,


function add(a:number,b:number):number{

    return a+b;
}

let  latest : ReturnType<typeof add>;


//here return type of latest is numberr type..,

