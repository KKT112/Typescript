class car{
    static model:number = 2022;

    static randomGenerate(){
        return Math.random();
    }
}
console.log(car.model);
console.log(car.randomGenerate());