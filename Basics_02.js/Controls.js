const number = 300

//if else statement
if (number > 400) {
    console.log("Hello India");
} else{
    console.log("Hello Bharat");   
}

//(&& and || opeartor)
const isLoggedIn = true
const isValidatedIs = true
const isValidated = false 
const newLoggedIn = false

if(isLoggedIn && isValidatedIs){   //both should be correct
    console.log("Print You are logged in");
} else {
    console.log("Not Validated");
}

if(newLoggedIn || isValidated){   //at-least one should be correct
    console.log("Print You are logged in");
} else {
    console.log("Not Validated");
}

if(number == "300"){   //Number is Equal
    console.log("Number is Equal");
}

if(number === "300"){   //Number is not Equal (===) to check data types as well
    console.log("Number is Equal");
} else {
    console.log("Number is not Equal");  
    
}

// switch case statements
const month = 2
switch (month) {
    case 1:
        console.log("January");
        break;

        case 2:
        console.log("Feb");
        break;     //agar hum break ko comment kr de toh ye aage ki value ko print kar deta h except default value 
        //we can not use {continue} keyword in switch case statement

        case 3:
        console.log("March");
        break;
        
    default:
        console.log("Not Exist");
        break;
}

const myObj = {}
if(Object.keys(myObj).length === 0){  //to chech object is empty or not
    console.log("Object is Empty");
}

// const username = "1" //string m value hogi toh truthy value hamesha hoti h
const username = 0 //this 0 will be return false
if(username === 1 ){
    console.log("True");
} else {
    console.log("False");
}


//nullish coalescing Operator variable = value 1 (??) value 2:
let val1;
val1 = 5 ?? 10  //?? operator jo pehli value hoti h use assign kar leta h jaise (5)
val2 = null ?? 10  //agar nulla and undefined hoga toh last wala value print hota h
console.log(val1);  //5
console.log(val2)  //10


//Ternary Operator
//syntax condition ? true : false
const num = 100
num < 80 ? console.log("Value is less than 100") : console.log("Value is greater than 100");
