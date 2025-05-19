const myNums = [12,14,12,12,12,12]
const newNums = myNums.filter((n) => {  //agar hum {} lagaenge to humein value return krni padegi like this { return n > 12}
   return n > 12
})

//using map method
const newNums1 = myNums.map((m) => {  //value m kuchh change krne ke liye
   return m + 10
})

// console.log(newNums1); 

const book = [
    {
      bookName: "To Kill a Mockingbird",
      publishYear: 1960,
      genre: "Fiction"
    },
    {
      bookName: "1984",
      publishYear: 1949,
      genre: "Dystopian"
    },
    {
      bookName: "The Great Gatsby",
      publishYear: 1925,
      genre: "Classic"
    },
    {
      bookName: "Harry Potter and the Sorcerer's Stone",
      publishYear: 1997,
      genre: "Fantasy"
    },
    {
      bookName: "The Hobbit",
      publishYear: 1937,
      genre: "Fantasy"
    }
  ];

const userBooks = book.filter((bk) => {  //ek particular object value ko access krne liye use krta hain
   return bk.genre === "Fantasy"
})

// console.log(userBooks);


//chaining
const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const arrNumber = arr.map((num) => num * 10 )
                     .map((num) => num + 1)
                     .filter((num) => num > 30)
// console.log(arrNumber);


//Reduce Method  //number ko add krne ke liye kiya jata h ek single m 
//To avoid loops like for or forEach for certain calculations.
const num = [1,2,3]
const totalNumber = num.reduce((acc, curr) => acc + curr, 0)  //inside parameter do chize leta h accamulaor and currunt value
console.log(totalNumber);


const course = [
    {
      courseName: "Web Development Bootcamp",
      instructor: "Angela Yu",
      price: 49.99,
      duration: "12 weeks"
    },
    {
      courseName: "Data Structures and Algorithms",
      instructor: "Abdul Bari",
      price: 39.99,
      duration: "10 weeks"
    },
    {
      courseName: "React - The Complete Guide",
      instructor: "Maximilian Schwarzmüller",
      price: 59.99,
      duration: "15 weeks"
    },
    {
      courseName: "Python for Everybody",
      instructor: "Dr. Charles Severance",
      price: 29.99,
      duration: "8 weeks"
    },
    {
      courseName: "Machine Learning",
      instructor: "Andrew Ng",
      price: 79.99,
      duration: "11 weeks"
    }
  ];
  

const totaPrice = course.reduce((acc, item) => acc + item.price, 0)
console.log(totaPrice);

