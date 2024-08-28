function add(a,b){
    return a+b;
}

function mul(a,b){
    return a*b;
}

function total(operation,x,y){
    return operation(x,y)
}

let a1 = total(add,10,10);
console.log(a1);
let a2 = total(mul,10,10);
console.log(a2);