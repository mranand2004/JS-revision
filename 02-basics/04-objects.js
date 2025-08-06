// const tinderUser=new Object()  ---singelton object

//OR

const tinderUser={}//non-singelton


tinderUser.id="123edf"
tinderUser.name="Ram"
tinderUser.isloggedin=false
// console.log(tinderUser)

const regularUser={
    email:'abs@gmail.com',
    fullname:{
        userfullname:{
        firstname:"aman",
        lastname:'Pandey'
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);

const obj1={1:"a",2:'b'}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const obj3={obj1, obj2}

// const obj3=Object.assign({}, obj1, obj2, obj4)
// //{}-> target  and   (obj1, obj2, obj4)->source)
const obj3={...obj1, ...obj2}
// console.log(obj3)

const users=[{
    id:1,
    email:"abc@gmail.com"
},

{ id:2,
    email:"adc@gmail.com"}

]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('islogged'))