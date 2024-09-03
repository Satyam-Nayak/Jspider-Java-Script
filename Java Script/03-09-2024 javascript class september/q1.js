function Student(id,name,subject,marks){
    this.id=id;
    this.name=name;
    this.subject= subject;
    this.marks = marks;
}

let s1 = new Student(1,"SATYAM", ["java","SQL"],800);
console.log(s1);

//object using class

class Bike {
    constructor(id,price,color,brand){
        this.id = id;
        this.price = price;
        this.color = color;
        this.brand = brand;
    }
}

let b1 = new Bike(99,89999, "Violet", "SUPER SPLENDER");
console.log(b1);