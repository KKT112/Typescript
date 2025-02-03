//returntype..,
function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;


//here return type of latest is numberr type..,

//promise await and async function
let url = "https://jsonplaceholder.typicode.com/todos/1";

let fetchData = fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((Error) => console.log("shown error"));

console.log(fetchData);

//try &catch in error solve

async function data() {
  try {
    let url2 = "https://jsonplaceholder.typicode.com/todos/2";

    let fetchData2 = await fetch(url2);
    let res2 = await fetchData2.json();

    console.log(res2);
  } catch (error) {
    console.log("in message api error");
  }
}
data();



//mypromise in typescript

let mypromise =new Promise((resolve,reject)=>{
   
   console.log("before executing promise")

   setTimeout(()=>{
      
    //console.log("promise after running..,");
    //resolve(["kuldeep","tank"]);

    console.log("promise rejected time")
    reject(new Error("sycessfully rejected"));
   },2000);
})

mypromise.then((res)=>{console.log(res)}).catch((error)=>{console.log(error)});


