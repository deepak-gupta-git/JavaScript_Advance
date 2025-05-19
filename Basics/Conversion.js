let number = 23
let stringNumber = String(number)
// console.log(stringNumber);
// console.log(typeof stringNumber);

let score = "123abc"
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);  //----> NaN

let value = undefined
console.log(typeof value);
console.log(value);  //---> undefined


let value1 = null
console.log(typeof value1);  //---->object
console.log(value1);    //----->null


let string = "deepak"  //if empty then "false"
let stringToBoolean = Boolean(string)
console.log(typeof stringToBoolean);
console.log(stringToBoolean);  //----> true


let someNumber = 12
let someNumberToString = String(someNumber)
console.log(typeof someNumberToString); // ---->String
console.log(someNumberToString);  //------>12


let str1 = "deepak"
let str2 = "gupta"
let str3 = str1 + " " + str2
console.log(str3);  //----> deepak gupta

console.log("1" + 2)   //--->12
console.log(1 + "2")   //--->12
console.log("1" + 2 + 2)   //--->122
console.log(1 + 2 + "2")   //--->32


console.log(true);    //--->true
console.log(+true);   //--->1
console.log(+"");   //--->0

let num1,num2,num3
const allnum  = num1 = num2 = num3 = 2+2 
console.log(allnum); //--->4


//Postfix increment
let x = 3;
const y = x++;
// x is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n

//Prefix increment
let a = 3;
const b = ++a;
// a is 4; b is 4

let c = 3n;
const d = ++c;
// c is 4n; d is 4n

//Primitive Data Types
// 7 Types : String, Number, Boolean, null, undefined, Symbol,BigInt


//Non-Primitive Data Types (Reference)
//Array, Objects, Functions  **** {always return function in case of typeOf} ****

const heros = ["ironman", "shaktiman","dogo"] //array
 
let myObj = {   //object
    name : "hitesh",
    age : 22,
}

const myFunction = function() {  //functions
    console.log("hello world");
}
myFunction();


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Memory Stack

//Stack (Primitive Data Types)  (Always Gets Copy Value )
//Heap (Non-Primitive Data Types)  (Reference Always Use)


//Stack Implementation (Copy Value will be pass)
let name = "deepakgupta"
let newName = name 
anotherName = "kumarvishwash"
console.log(anotherName);
console.log(name);


//Heap Implementation (Reference Value will be passed)
user1 = {
    name : "kumarvishwash",
    email : "kumar@ybl"
}

let user2 = user1 
user2.email = "vishwash@ybl"

console.log(user1.email);
console.log(user2.email);

