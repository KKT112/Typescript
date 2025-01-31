var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name, model, isgood) {
        this.name = name;
        this.model = model;
        this.isgood = isgood;
        this.name = name;
        this.model = model;
        this.isgood = isgood;
    }
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(name, model, isgood) {
        return _super.call(this, name, model, isgood) || this;
    }
    Car.prototype.change = function () {
        return "".concat(this.model = 2011, " and good");
        // this.num=123, =>we cannot assign the value because that is in private..,
    };
    return Car;
}(Vehicle));
var car1 = new Car("bmw", 2333, true);
console.log(car1);
car1.change();
