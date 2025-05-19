let a = 10    //global scope
const b = 20
var c = 30


if (true){   //{ inside this matter called block scope }
let a = 20   //block scope
const b = 20
var c = 300
console.log("Inner a :" , a);
}


console.log(a);
// console.log(b);
console.log(c);

//nested scope
function one(){
    const userName = "hitesh"
    function two(){    //another nested function inside an function
        const website = "YouTube"
        console.log(userName);
    }
    // console.log(website);
    two()
}

one()


if(true) {
    const username = "deepak"
    if(username === "deepak"){
        const website = "youtube"
        console.log(username + website);
    }

    // console.log(website);
}
// console.log(username);

//++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addOne(5));  //it will work wheather it is on top
function addOne(num){
    return num + 1
}

//hoisting 
console.log(addTwo(5));   //this is give error because of function declaration
const addTwo = function(num){
    return num + 2
}


