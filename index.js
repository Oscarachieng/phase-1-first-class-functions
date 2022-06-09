function receivesAFunction(myCallback) {
    console.log(myCallback());
}

function returnsANamedFunction() {
    return receivesAFunction();
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am learning functions")
    }
}