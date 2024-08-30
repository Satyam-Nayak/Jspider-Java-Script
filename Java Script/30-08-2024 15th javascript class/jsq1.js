var str = "String in js";
console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
console.log(str.length); //find the length 

let char = str.toLocaleLowerCase();  // convert all the charaters into lower case
console.log(char);

let char1 = str.toLocaleUpperCase();  // convert all the charaters into uuper case
console.log(char1);


//inbuild method to print the any user defined charater using "str.charAt()"
console.log("-------------")
let char3= str.charAt(3);
console.log(char3);


//str.indexOf() string inbuild method to return index position of the charecter
let index= str.indexOf('i',4);
console.log(index);

let index3= str.lastIndexOf('n',7);
console.log(index3);



//linear searching    (insted of using this long code we can use indexOf() )
for(let i = 0; i< str.length; i++){
    if(str[i]=="g"){
        console.log(i);
    }
}



// it search from the last index
for(let j = str.length-1;j>0; j--){
    if(str[j]=="g"){
        console.log(j);
    }
}