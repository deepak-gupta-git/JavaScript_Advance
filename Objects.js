let myObj = {
    name : "deepak",
    "fullname" : "deepakgupta",
    email : "deepak@ybl",
    phone : 9838950567,
    location : "Kushinagar",
    district : "Gorakhpur"
}

// console.log(myObj);


// console.log(myObj["fullname"]);    //for some case if needed
// console.log(myObj["email"]);   //for some case if needed

console.log(myObj.name);   //to print the name with dot(.) operator
// Object.freeze(myObj)    //to freeze the object value

myObj.name = "kumar"   //to change the name

myObj.greeting = function(){
    // console.log(`Hello JS User the is ${this.name} and the email is ${this.email}`);
}
console.log(myObj.greeting());  //output----> "Hello JS User"
// console.log(myObj);


// object Advance
newObj = {
    userName : {
        fullName : {
            firstName : "deepak",
            lastName : "gupta"
        }
    },

    email: "deepakgupta@ybl",
    phone : "9676232112"
}
console.log(newObj.userName.fullName.lastName);  //output ----> gupta

const object1 = {1: "a" , 2: "b"}
const object2 = {3: "a" , 4: "b"}
const object3 = {5: "a" , 6: "b"}

// const object4 = {object1,object2,object3} // output ----->
// {
//     object1: { '1': 'a', '2': 'b' },
//     object2: { '3': 'a', '4': 'b' },
//     object3: { '5': 'a', '6': 'b' }
//   } 

const object4 = {...object1,...object2,...object3}  //kai object value ko ek object name m laane ke liye
console.log(object4);
// output -----> { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }


const users = [  
    {
        name : "shyam",
        lastname:"prasad",
        email:"shyam@gmail.com"
    },
    {
        name : "shyam",
        lastname:"meena",
        email:"meena@gmail.com"
    }
]

console.log(users[1].email);   //meena@gmail.com kyunki indexing zero se shuru hoti h
// console.log(users[3].email);  //error


// console.log(Object.keys(myObj));   //only showing keys pair like 'name', 'email'
// console.log(Object.values(myObj));  //only showing values pair like 'deepak', 'deepka@gmail.com'
// console.log(Object.entries(myObj));  //showing both key + value pairs both


const course = {
    coursename : "delta 2.0",
    courseInstructor : "shradha khapra",
    price:"999"
}

const {coursename : name} = course  //destructuring
console.log(name)
// console.log(course.courseInstructor);

const numbers = [10, 20, 30];
const [a, b] = numbers;

// console.log(a); // 10
// console.log(b); // 20

