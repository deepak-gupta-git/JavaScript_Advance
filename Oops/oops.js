//object literals
const user = {
    username : "deepak",
    signUpTime : 9,
    signUpTime : true,

    getUserDetails : function(){
        console.log(`Username : ${this.username}`); //object literals 
        console.log(this);  //this keyword always talk about currunt context
    }
}


function User (username, loginCount, isLoggedIn){
    this.username = username; //here this.username is bassically a variable
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("deepak", 12, true)
const userTwo = new User("kumar", 11, false)
console.log(userOne);
console.log(userTwo);

// console.log(this);  //output ---> {}

// console.log(user.username); //normal print
// console.log(user.getUserDetails());
