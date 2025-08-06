// function addTwoNumbers(a,b){
//     console,log(a+b);
// }
// addTwoNumbers(2,3)

const { use } = require("react");

function addTwoNumbers(a,b){
  let result=a+b;
  return result

  //or
  // return a+b
}
const result=addTwoNumbers(2,3);
// console.log("result:",result)

function loginusermessage(username){

    if(use===undefined){
        console.log("please enter a username")
        return
    }
    return`${username} just logged in `
}

// console.log(loginusermessage())

// console.log(loginusermessage("Anand"))

function calculatecartprice(val1,val2,...num1){
    return num1
}
// console.log(calculatecartprice(200,400,500,2000))


const user={
    username:"Anand",
    price:199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is $
        {anyobject.price}`);
    
}
handleobject(user)

const myNewarray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnsecondValue(myNewArray));