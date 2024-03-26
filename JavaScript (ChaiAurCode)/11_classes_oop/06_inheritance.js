class User{
    constructor(username){
        this.username = username
    }

    logMe(){
       return `User Name is : ${this.username}`
    }
}

class Teachers extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
       return `This course was added by ${this.username} sir`;
    }
}

const Teacher1 = new Teachers("Anish", "anish@email.com", "1254621")

console.log(Teacher1);
console.log(Teacher1.addCourse());
console.log(Teacher1.logMe());