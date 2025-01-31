function sum(a, b) {
    if (typeof a === "number" && typeof b === "undefined") {
        console.log("lets try");
    }
    else if (typeof a === "number" && typeof b === "string") {
        console.log("nice to meet you");
    }
    else {
        new Error("this is an error in function"); ///throw not run
    }
}
sum("2");
sum(2, "7");
