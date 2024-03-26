// After ES6

Object.prototype.TrueLength = function(){
    return this.trim().length
}

// class user{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptedPass(){
//         return `Your Password is : ${this.password}`
//     }

//     SmallCharUsername(){
//         return `${this.username.toUpperCase()}`
//     }

//     NameLength(){
//         return this.username.TrueLength()
//     }


// }

// const anish = new user("Anish", "email@email.com", "1542oass")

// console.log(anish.encryptedPass());
// console.log(anish.SmallCharUsername());
// console.log(anish.NameLength());



// Behind the Scene (before ES6)

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptedPass = function(){
    return `Your Password is : ${this.password}`
}

User.prototype.SmallCharUsername = function(){
    return `${this.username.toUpperCase()}`
}

User.prototype.NameLength = function() {
    return this.username.TrueLength()
}

const sayan = new User("sayan", "sayan@email.com", "546sayan")

console.log(sayan.encryptedPass());
console.log(sayan.SmallCharUsername());
console.log(sayan.NameLength());