//JavaScript me promises ek tarah ka object hota hai jo future me 
// kisi asynchronous operation ke complete hone 
// (ya fail hone) ka result represent karta hai.


//Jab tum JS me koi aisa kaam karte ho jo turant complete nahi hota (jaise: server se data lana,
//  file read karna, ya time delay), to uske liye Promise use hota hai. 
// Ye tumhe "vaada" deta hai ki kaam future me ya to complete hoga (resolve) ya fail hoga (reject).

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        // console.log("Async Task");
        resolve(); //for resolving the promisses
    }, 1000)
}).then(function(){
    // console.log("Async Task Resolved");
})

async function getAllUsers(){
   try {
    const response = await fetch("https://api.github.com/users/deepak-gupta-git")
    // console.log(response);
    
    const data = await response.json()
    console.log(data);
   } catch (error) {
    console.log("E: ", error);
   }
}
getAllUsers()