function User(email, password) {
    this._email = undefined;
    this._password = undefined;

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return `${this._password}anand`;
        },
        set: function (value) {
            this._password = value;
        }
    });

    // Now use setters to initialize values
    this.email = email;
    this.password = password;
}

const chai = new User("chai@chai.com", "abs");
console.log(chai.email);     // CHAI@CHAI.COM
console.log(chai.password);  // absanand
