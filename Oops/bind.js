//Jab tum function ko kisi variable me assign karte ho, ya callback ke form me pass karte ho, to uska this context loose ho jata hai.

//bind() se hum uska this fix kar krte hain.

const person = {
  name: "Amit",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

const greetFunc = person.greet;
greetFunc(); //  Output ---> "Hello, my name is undefined" (kyunki this loose ho gaya)

const boundGreet = person.greet.bind(person);
boundGreet(); //  Output ---> "Hello, my name is Amit"


