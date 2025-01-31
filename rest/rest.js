function largeparameter() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    var sum = 0;
    array.forEach(function (e) {
        sum += e;
    });
    console.log(sum);
}
largeparameter(1, 2, 3);
