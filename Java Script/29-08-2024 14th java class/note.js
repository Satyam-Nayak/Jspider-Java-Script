//A function that is passed as an argument inside another function is called as CALLBACK FUNCTION.
// A function that is accepting a callback function as an argument is known as Higherorder function.
//A function that is neither accepting a callback function as an argument nor passed as an argument
// inside other function is known as first order function.

function add(a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function total(operation, x, y) {
    return operation(x, y);
}
let a1 = total(add, 10, 10);
console.log(a1);

let b2 = total(mul, 10, 10);
console.log(b2);


console.log("I am called before");
setTimeout(() => {
    console.log("I am a delay");
}, 3000);
console.log("I am called after");