function setUserName(username){
    this.username = username
    console.log("created");
}

function createUser(username, email){
    setUserName.call(this, username)
    this.email = email

}

const user = new createUser("Anish", "email")

console.log(user);