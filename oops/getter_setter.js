class User{
    constructor(email,password){
        this.email=email;
        this._password=password;
    }


    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }

    get password(){
        // return this._password.toUpperCase()
        return`${this._password}anand`

    }
    set password(value){
        this._password=value;
    }

}


const anand=new User("a@nand.ai","abs")
console.log(anand.password);









