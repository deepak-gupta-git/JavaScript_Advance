function printHello() {   //Normal Function
    console.log("Hello World");   
    console.log("Hello World");   
    console.log("Hello World");   
    console.log("Hello World");   
}
// printHello()

// function addToNumbers(num1, num2){
//      console.log(num1 + num2)
// }
// addToNumbers(2,2)

function addToNumbers(num1, num2){
    // console.log(num1 + num2)
    let result = num1 + num2
    return result
}
const result = addToNumbers(2,2)
// console.log("result: ", result);


function loginUser(username){

    if(username === undefined){  //(!username)
        console.log("Please Log first");
        return
    }
    return `${username} just logged in`
} 
// console.log(loginUser("hitesh"));  //hitesh
// console.log(loginUser());  //undefined

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// functions advance

function calculatePrice(num1){ //200
//function calculatePrice(...num1)  //output--->  [ 100, 200, 300 ]
    return num1
}
console.log(calculatePrice(100,200,300));


//using object
myObj = {
    name:"deepka",
    email : "deepak@ybl"
}
//passing the  object
function printMyObj(anyObject) { //we can easily access with any other object name like {anyObject}
    console.log(`The name is ${anyObject.name} and email is ${anyObject.email}`);
}
printMyObj(myObj)


//passing the array
const myNewArray = [200, 300, 400, 500]
function returnSecondValue(passArray) {
    return passArray[1]
}
console.log(returnSecondValue(myNewArray));
