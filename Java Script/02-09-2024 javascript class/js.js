//objects using literals

let emp = {
    id : 5,
    name: "abc",
    phone : 9437371311,
    mark : [123,23]
}

console.log(emp);
//get
console.log(emp.name);
console.log(emp.mark[0]);
console.log(emp.phone);
//create
emp.course = ["java","sql"];
console.log(emp);
//update
emp.name = "aditya";
console.log(emp);
//delete
delete emp.id;
console.log(emp);