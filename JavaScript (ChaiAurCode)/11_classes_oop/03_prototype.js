const SuperHeros = ["IronMan",  "SpiderMan", "Anish"]

const HeroPower = {
    ironman : "Intelligence",
    spiderman : "Web"
}

Object.prototype.TrueLength = function(){
    return this.trim().length
}

SuperHeros.forEach(name => {
    console.log(name.TrueLength());
});



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)