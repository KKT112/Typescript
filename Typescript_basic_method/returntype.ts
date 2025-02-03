let fun = async()=>{

    const val = "string";
    return val;

}

type mynewn = Awaited<ReturnType<typeof fun>>;

let message:mynewn = "good";
console.log(message);