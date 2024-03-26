class user{
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(this.username);
    }

    static createUID(){
        console.log("4658");
    }
}


const user_1 = new user("Anish")

user_1.logme()

try{
    user_1.createUID()
}
catch{
    console.log("not Accessable");
}

