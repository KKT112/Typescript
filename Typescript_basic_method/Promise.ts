function createEmptyPromise(): Promise<void> {
    return new Promise((resolve) => {
        resolve();
    });
}

createEmptyPromise().then(() => {
    console.log(`Empty Promise is created
by immediately resolving 
it after creating instance
of Promise object.`);
});