for(let i=1; i<=10; i++){
    // console.log(" ", i); //1 to 10 number
}

for(let i=1; i<=10; i++){ //outer loop sabse pehle 1 baar chalega phir inner loop par jump karega
    // console.log("Outer Loop value is ", i); 
    for(let j=0; j<=10; j++){  //inner loop 10 baar chalega phir outer loop par jump krega
        // console.log("Inner Loop value is ", i); 
    }
}


//for loops on array
let array = ["ironman", "thor", "hulk"]
for(let i=0; i<=array.length ; i++){
    // console.log(array);  //it will print three time array value
    const element = array[i]
    // console.log(element);
}

//break and continue keyword
for(let index=1; index<=20; index++){ //if we only use(index) instead of using (index++) then it will print one infinite times
    if(index == 5){
        // console.log("5 is detected");
        // break; //break keyword
        // continue;  //skip the one iteration
    }
    // console.log("Value is : ", index);
}

//while loop  //pehle condition check ho jaati h phir work hota h
//minimum iteration 0
//Entry control loop //kyunki condition check ho jata loop ke body m jaane se pehle hi
let index = 1 //initialize 
while(index<=10){ //condition
    // console.log("The value of index is :", index);
    // index = index++ //it will print infinite time 1
    index = index + 1 //print number 1 to 10 //execution
}

//do-while loop //pehle hi kaam ho jata h phir condition check hoti h
//minimum iteration 1
//Exit control loop

let score = 1
do{
    // console.log(`Score is ${score}`);  //output Score is 1 to 10
    score++  //if score = score ++ ho jaye toh ye infinite loop ho jayega
} while (score<=10)

//forof loops
let arr = [1,2,3,4,5]
for (const arrs of arr) {
    // console.log(arrs); //print nums 1 to 5
}

let heros = ["ironman", "batman", "thor", "hulk"]
for(const hero of heros){
    // console.log(hero); //print ironman, batman, thor, hulk
}

//forin loop jo bas key return krta h aur forof sidhe value ko return karta h
//object ko access krne ke liye of ke liye foin loop use krte hain of jagah (in) use krte hain
//forof loops on Object
const myObject = {
    name:"deepak",
    email:"deepak@ybl",
    lang : "c++"
}

for(const key in myObject){
    // console.log(key); //only print keys
    // console.log(myObject[key]); //This will be print value only
}

//for each loop
const coding = ["Cpp", "java", "c", "ruby", "python"]
coding.forEach( (item) => { //for each loop array ke ek ek index par jakr value ko search krta h aur find krta h {aur ye arrow function ke sath jyade use hita h}
    // console.log((item));   
})
//array ke object ko find krne m kaafi help krta h easy tarike se


const myCoding = [
    {
        name : "deepak",
        email:"deepak@ybl"
    },
    {
        name : "aman",
        email : "aman@ybl"
    },
    {
        name : "astha",
        email : "astha@ybl"
    }
]

myCoding.forEach((item) => {  //for access the value
    console.log(item.name);
})