//class
//Class ek template hota hai jisse hum multiple similar objects bana sakte hain, jisme same properties aur methods hote hain.
// ES6

//using class
class User {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const deepak = new User("deepak", "deepak@gmail.com", "123")

console.log(deepak.encryptPassword());
console.log(deepak.changeUsername());

// behind the scene
//without class
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const kumar = new User("kumar", "tea@gmail.com", "123")

console.log(kumar.encryptPassword());
console.log(kumar.changeUsername());