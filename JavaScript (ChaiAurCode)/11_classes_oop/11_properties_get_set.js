function user(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, "password", {
        get : function(){
           return `${this._password.toUpperCase()} _modified`
        },

        set : function(value){
            this._password = value
        }
    })
}

const user1 = new user("example@mail.com", "this is my password 123654")

console.log(user1.password);