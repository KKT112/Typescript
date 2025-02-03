//basic interface
function validate(givetype) {
    givetype.name = givetype.name;
}
validate({
    name: "killer",
    age: 22,
    Ischildren: false,
});
console.log(validate);
var subscribe = {
    id: 1,
    name: "Paris",
    sign: function () {
        return "Bonjour";
    },
};
console.log(subscribe);
var box = { height: 5, width: 6, scale: 10 };
console.log(box);
