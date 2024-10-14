// Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

const person = {
name: "Aman Roy",
age: 23,
greet(){
    return `Hello, my name is ${this.name}.`
},
birthday(){
    this.age += 1;
    return `I am now ${this.age} years old.`
}
}

module.exports = person;
