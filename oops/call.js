function SetUsername(username){
    //complex DB calls
    this.username=username
    console.log("called");

}
function createUser(username, email, password){
    SetUsername.call(this,username)// .call is used for reference
    this.email=email
    this.password=password
}

const tea=new createUser("tea", "ddu@gmail.com","223")
    console.log(tea);
