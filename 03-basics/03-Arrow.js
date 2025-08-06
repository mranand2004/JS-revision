const user={
    username:'Anand',
    price:9999,


    welcomemessage: function(){
        console.log(`${this.username}, welcome to website`);
        //  console.log(this)
    }

}

// this function k under kaam nhi kr ha hai object
//  k under kr rha hai

    // user.welcomemessage()//Anand, welcome to website

    // user.username="Ayush"
    //     user.welcomemessage()//Ayush, welcome to website
    //  console.log(this)//{}


    const kaam=()=>{
        let username="Ayush"
        console.log(this);//{}
        // console.log(this.username);//undefined
    }

kaam()

// const addTwo=(num1, num2)=>{
//     return num1+num2
// }

// {} hai to return likhna hai (aur isi ko explicit bolte hai){} nhi hai to 
// return nhi likhna hai(implicit bolte hai)
// console.log(addtwo(3,4))

 const addTwo=(num1, num2)=>
     num1+num2

console.log(addTwo(3,4))





 
