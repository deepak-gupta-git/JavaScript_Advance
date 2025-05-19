//Prototype JavaScript ka ek powerful feature hai jo mainly inheritance (yaani virasat) ke liye use hota hai.
//  Iska matlab hai ki ek object doosre object ke properties aur methods use kar sakta hai.

function Student(name){
    this.name = name
}

Student.prototype.greet = function(){  //prototype method
    console.log(`Hello, My name is ${this.name}`);
}

const s1 = new Student("Amit")
const s2 = new Student("Kumar")
s1.greet();
s2.greet();
