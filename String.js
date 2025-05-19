let gameName = "Bolly"
let anotherName = "Ball"

let newGame = gameName + " " + anotherName
let newGame1 = (`${gameName} is the half name is of ${anotherName}`)  //Uses of backtick
// console.log(newGame1);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  //knowing indexes
console.log(gameName.indexOf('y'));  //knowing position
console.log(gameName.slice(0,2));  //slice number ko cut krta h like 0 -2 and last value of neglect kr deta h 
//substring (-) ko value of neglect kr deta h :)


let newString = "   deepak    "
console.log(newString);
console.log(newString.trim());    //extra space of neglect(remove) kr deta h

const url = "https://deepak-kumar-gupta.com"
console.log(url.replace('gupta', 'sharma'))  //replace the value

console.log(url.includes("deepak"))   //knowing value is existing or not

//concate
const str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
// Expected output: "Hello World"

console.log(str2.concat(", ", str1));
// Expected output: "World, Hello"
