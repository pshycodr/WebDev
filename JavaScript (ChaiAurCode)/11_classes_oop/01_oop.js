const obj = {
    username : "Anish",
    LoginCount : 12,
    SignedIn : true,

    getUserDetails : function (){
        // console.log("Got user details from DB");
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}


// console.log(obj.getUserDetails());
// obj.getUserDetails()


function user(userName, userLogin, IsSignin){
    this.userName = userName
    this.userLogin = userLogin
    this.IsSignin = IsSignin

    this.greetings = function(){
        (this.IsSignin === true) ? console.log(`Welcome, ${this.userName}`) : console.log("Please signIn");
    }
}

const userOne = new user("anish", 15, false)
console.log(userOne);
console.log(userOne.greetings());

const userTwo = new user("sayan", 14, true)
console.log(userTwo);
userTwo.greetings()