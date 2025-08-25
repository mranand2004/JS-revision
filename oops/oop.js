// object literals


const user={
    username:"Annad",
    loginCount:9,
    signedIn:true,

    getUserDetails: function(){
        // console.log("Got user details from database");

        // console.log(`username:${this.username}`);

        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);



//  constructor function

 function User(username,loginCount, isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;


    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
 }

 const userOne= new User("Anand",11,true)
 console.log(userOne.constructor);  //   [Function: User]
 const userTwo= new User("Dwivedi",21,true)
//  console.log(userTwo)