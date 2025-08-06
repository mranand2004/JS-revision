const useremail=[]
if(useremail){
    console.log("got user email");
}
else{
    console.log("don't have user email")
}


//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0","false"," ",[],{},function(){}

// if(useremail.length===0){
//     console.log("Array is empty");
// }

const emptyobj={}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}

//Nullish coalescing operator (??): null undefined

// val1=5??10
// val1=null??10
// val1=undefined??15
val1=null??10??15

console.log(null);

// ternary operator (smaller version of if-else)

    //condition ? true:false 

    
const iceteaprice =100
iceteaprice <= 80 ? console.log("less than 80"):
console.log("more than 80")    