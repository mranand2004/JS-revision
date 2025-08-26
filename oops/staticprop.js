class User{

    constructor(username){
        this.username=username
    }

    logMe(){
         console.log(`username:${this.username}`);
    }

    static createId(){// is property ko access hone se rokta hai
        return`123`
    }
}

const anand=new User("Anand")
// console.log(anand.createId())



class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email=email
    }
}

const iphone=new Teacher("iphone", "@i@phone.com")
// iphone.logMe();

console.log(iphone.createId());