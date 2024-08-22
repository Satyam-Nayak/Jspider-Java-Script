function data(){
    let a= 100;
    let b = 200;
    function market(){
        let c =20;
        let d = 10;
        let total = a+ b + c + d;
        return total;
    }
    let result = market();
    return result;
}

let final = data();
console.log(final);