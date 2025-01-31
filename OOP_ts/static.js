var car = /** @class */ (function () {
    function car() {
    }
    car.randomGenerate = function () {
        return Math.random();
    };
    car.model = 2022;
    return car;
}());
console.log(car.model);
console.log(car.randomGenerate());
