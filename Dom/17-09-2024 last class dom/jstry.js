// let a = 11;
// let b = 4;
// function parent(){
//     let c = 10;
//     console.log(a+ b + c );
//     function child(){
//         let d = 21;
//         console.log(a+ b+ c+ d);
        
//     }
//     child()
// }
// parent();




//reverse asendening
let arr = [12,34,5,3,1,90];
let newArr = arr.sort((a,b)=>{
    return a-b;

})
console.log(newArr);

//reverse desending
let arr1 = [12,34,5,3,1,90];
let newArr1 = arr1.sort((a,b)=>{
    return b-a;

})
console.log(newArr1);
