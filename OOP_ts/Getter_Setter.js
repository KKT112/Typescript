var UserName = /** @class */ (function () {
    function UserName(name, age) {
        this.name = name;
        this.age = age;
    }
    UserName.prototype.getName = function () {
        return this.name;
    };
    UserName.prototype.setname = function (value) {
        this.name = value;
    };
    return UserName;
}());
var user1 = new UserName("kkt", 22);
console.log(user1.getName());
var b12 = user1.name = "kkt";
console.log(b12);
