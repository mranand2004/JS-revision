// Immediately Invoked function Expression (IIFE)

(function kaam(){
    console.log('DB connected');
})();


//  OR

// (()=>{
//     console.log(`DB connected Two`)
// })()

((name)=>{
    console.log(`DB connected Two ${name}`);
})('Anand')


//()()first on is for function definition and second 
// one is for function execution



///----------------important-------------


// global scope k pollution se problem hoti hai kai baar
//to us global scope k jo variable hai jo bhi waha declaration 
// hai us pollution ko hatane k liye hmne iife ka use kiya.


