//this keyword
curObj = {
    name:"astha",
    email:"astha@ybl",
    welcomeMsg : function(){
        console.log(`Hello ${this.name} your email is ${this.email}`);
        //this always refers ""currunt context""
        // console.log(this);
    }
    
}

// regular function(this) -----> undefined
// arrow function(this) -----> {}

curObj.welcomeMsg()
curObj.name = "deepak"
curObj.welcomeMsg()
// console.log(curObj);
console.log(this)  //output  ----> {}
// browser ke andar global object "window" object hota h 

const addTwo = (num1, num2) => {
    console.log(this);  //{}
    return num1 + num2
}

const addThree = (a,b,c) =>  a+b+c // or (a+b+c) //explicit method without using {}

const addFour = (x,y) => ({username : "deepak"} ) //this object can not be access like this  {username : "deepak"}

console.log(addTwo(3,3));
console.log(addThree(3,3,3));
console.log(addFour(3,3));

