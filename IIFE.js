// Immediately Invoked Function Expression (IIFE)

(function chai(){ //iife syntax()() jab humein kisi function ko emmidiate envoke krna ho to
    //named iife 
    console.log("Db Connected")
})();   //paranthesis is shwoing the calling of the function Immidiately()
//here semicolon(;) bassically used for freezing the next function


(
    () => {
        console.log("Hello India");
        //unnamed iife
    }
)()