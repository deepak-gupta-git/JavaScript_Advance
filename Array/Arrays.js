const myArr = [1,2,3,4,5,6]
// console.log(myArr);


//array method
myArr.push(7)   //last index par ek value ko add krta h
myArr.pop()   //last index ki value ko remove kr deta h aur koi paramenter nhi leta h
myArr.unshift(2)  //first index par ek value ko add krta h
myArr.shift()   //first index ki value ko remove kr deta h aur koi paramenter nhi leta h



const newArr = myArr.join()  //---->It will convert this in to string
// console.log(myArr);
// console.log(typeof newArr);  


//slice  ---->does not change the array 
// let fruits = ["apple", "banana", "mango", "orange"];
// let sliced = fruits.slice(1, 3);    
// console.log(sliced); // ["banana", "mango"]
// console.log(fruits); // ["apple", "banana", "mango", "orange"] – original unchanged


// //splice    ---->it changed the array
// let fruits1 = ["apple", "banana", "mango", "orange"];  
// let removed = fruits1.splice(1, 2); // removes "banana" and "mango"
// console.log(removed); // ["banana", "mango"]
// console.log(fruits1);  // ["apple", "orange"] – modified


//array advance
marvelHeros = ['ironman','spiderman','thor']
dc_heros = ['batman','superman','flash']
// marvelHeros.push(dc_heros)
// console.log(marvelHeros);

//output [ 'ironman', 'spiderman', 'thor', [ 'batman', 'superman', 'flash' ] ]


//return single array
const allHero = marvelHeros.concat(dc_heros)
// console.log(allHero);


//spread opertor
const newHero = [...marvelHeros,...dc_heros]
// console.log(newHero);
//output ----> [ 'ironman', 'spiderman', 'thor', 'batman', 'superman', 'flash' ]

//using flat ------ multiple array ko ek hi array m merge kar deta h
const array = [1,2,3,4,[2,3,2],[2],[12,34,1 [1,3,5]]]
const anotherArray = array.flat(Infinity)
console.log(anotherArray);

///make string to array
console.log(Array.isArray("deepak"));  //false
console.log(Array.from("deepak"));  //making array
console.log(Array.from({name : "deepak"}));  //retun []

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1,score2,score3));  //push elements in an array

