function createEmptyPromise() {
    return new Promise(function (resolve) {
        resolve();
    });
}
createEmptyPromise().then(function () {
    console.log("Empty Promise is created\nby immediately resolving \nit after creating instance\nof Promise object.");
});
