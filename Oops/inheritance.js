//super.methodName() → 
// super keyword ---> parent class ka method call karta hai.

class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor (username, email, password){
        super(username)
        this.email = email;
        this.password = password;
    }
}
const data = new Teacher("deepak", "deepak@gmail.com", "123")
data.logMe();

console.log(data === Teacher);  //false kyunki instances hoti h ek se dusri bankar aati hain
console.log(data instanceof Teacher);  //true


