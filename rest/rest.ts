function largeparameter(...array :number[]){  //large parameter can be stored in one array..,
 
    let sum =  0;
    array.forEach((e) => {
        sum += e;
    });
    console.log(sum);
        
}

largeparameter(1,2,3)