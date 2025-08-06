
let a=300
if(true){
    let a=10
    const b=29
    // var c=30

    // console.log("inner:",a)
}// scope  k under wala value bahar nhiu jaani chahiye

// if k under wala sb block scope hai and uske bahar
//  wala sb global scope hai
// console.log(a)


function one(){
    // const username="Anand"
    function two(){
        const website="youtube"
        // console.log(username)
    }
    // console.log(website);
    two()
}
//one()

if(true){
    const username="Anand"
    if(username==='Anand'){
        const website="youtube";
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username)
console.log(addone(5))
function addone(num){
    return num+1
}

addTwo(5)//hosting
const addTwo=function(num){
    return num+2
}
