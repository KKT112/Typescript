var BootleMaker = /** @class */ (function () {
    function BootleMaker(name, size, prise, isgood) {
        // modifier variable:type of variable;
        if (isgood === void 0) { isgood = "true"; }
        this.name = name;
        this.size = size;
        this.prise = prise;
        this.isgood = isgood;
        this.name = name;
        this.size = size;
        this.prise = prise;
        if (!isgood) {
            this.isgood = "true"; //in case of the value already define that case
        }
    }
    return BootleMaker;
}());
var bottle1 = new BootleMaker("plastic", 2, 20);
console.log(bottle1);
//optional property and read only property ;
var Animal = /** @class */ (function () {
    function Animal(name, type, age) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.name = name;
        this.type = type;
        this.age = age;
    }
    Animal.prototype.typeChange = function () {
        // here show the error because that is not change  => return (this.type = "not paaltu"); 
    };
    return Animal;
}());
var animal1 = new Animal("dog", "paaltu");
animal1.typeChange();
