//1.numbers
var num = 3.4;
console.log(num);
//1.1method of numbers
var num2 = 123.4556;
console.log(num2.toExponential());
console.log(num2.toPrecision(4));
console.log(num2.toFixed(1));
console.log(num2.toLocaleString());
//tuples
var arr = [3, "hello"];
console.log(arr);
//enums =>one type of object but use with = sign;
var Good;
(function (Good) {
    Good["enum3"] = "abc";
    Good["enum4"] = "def";
})(Good || (Good = {}));
console.log(Good.enum3);
//string
var a = "hello world";
console.log(a);
//any 
var b; //not declare that case any
b = 1.2;
b = "xyz";
console.log(b);
//unknown
var abc;
abc = 12;
abc = "kuldeep";
if (typeof abc === "number") {
    console.log(abc);
}
//void => if not return then void
function delta() {
    console.log("hii, bro");
}
//null and multiple asssign with |
var fruit = " "; //"hello"
//Never : that variable can be assign at th enext statement can be not printed and never show..,
