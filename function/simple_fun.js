function abcd(name, age, another_fun) {
    another_fun("hello");
}
abcd("kkt", 23, function (para1) {
    console.log(para1);
});
