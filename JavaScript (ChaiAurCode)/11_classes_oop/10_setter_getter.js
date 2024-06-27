class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return `${this._email}_modified`
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}_modified`
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const user1 = new user("example@email.com", "546ksj")

console.log(user1.password);
console.log(user1.email);
