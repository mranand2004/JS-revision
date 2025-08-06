// object literals


const mysym=Symbol("key1")
const jsuser={
name:"Anand",
"full name":"Anand Dwivedi",
age:22,
location:"chandigarh",
email: "mr.anand2004@gmail.com",
islogedin:false,
lastlogedin:["mon","tue"],
[mysym]:"my key1"
}

console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["full name"])
console.log( jsuser[mysym])
console.log(typeof jsuser[mysym])

jsuser.email="mr.ayush2018@gmail.com"
// Object.freeze(jsuser)

jsuser.email="mr.aarush3324@gmail.com"
// console.log(jsuser);

jsuser.greeting=function(){
    console.log("hello jsuser")
}


jsuser.greetingTwo=function(){
    console.log(`hello jsuser ${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());

