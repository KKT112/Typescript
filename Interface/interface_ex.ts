interface Movie {
  name: string,
  hit: boolean,
  rating: number,
}

interface South extends Movie{
    action:string,
}

function movie1(obj:South){
  obj.name=obj.name;

    
}
movie1({
    name:"ks",
    hit:true,
    rating:7.6,
    action:"good",

})
console.log(movie1);
