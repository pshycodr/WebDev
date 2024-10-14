// Day 8: ES6 + Features
// Tasks/Activities
// Activity 1: Template Literals
// Task 1:
let name = "Aman";
let age = 23;
let res = `The name of the person is ${name} and age is ${age}`;
console.log(res);

// Task 2:
let multiLineString = `This is a multi-line string.
It allows you to write text across multiple lines
without needing to use escape characters.

Template literals make it easy to format text
in a readable way.`;

console.log(multiLineString);

// Activity 2: Destructuring
// Task 3:

let numbers = [10,20,30,40,50];
let [first, second] = numbers;
console.log(`First element: ${first}`);
console.log(`Second element: ${second}`);

// Task 4:

let book = {
    title: "To kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

let {title, author} = book;
console.log(`Title: ${title}`);
console.log(`Author: ${author}`);

// Activity 3: Spread And Rest Operators
// Task 5:

let originalArray = [1,2,3];
let newArray = [...originalArray, 4,5,6];
console.log(newArray);

// Task 6:
function sumAll(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1,2,3,4));

// Another example of rest operator(Array destructuring)
const [first1, second1, ...rest] = [1,2,3,4,5];
console.log(rest);

// Rest operator(Object destructuring)
const {a, b, ...others} = {a: 1, b: 2, c: 3, d: 4};
console.log(others);

// Activity 4 Default Parameters
// Task 7:

function multiply(a,b=1){
    return a * b;
}
console.log(multiply(5));

// Activity 5: Enhanced Object Literals
// Task 8:

const person = {
    name: "Aman",
    age: 23,

    // Method shorthand
     greet(){
        return `Hello, my name is ${this.name}.`;
     },

     // Computed property name
     ['isAdult']: function(){
        return this.age >= 18
     },

     // Dynamic Property
     getProfile(){
        return{
            name : this.name,
            age : this.age,
            isAdult : this.isAdult()

        }
     }
}
console.log(person.greet());
console.log(person.isAdult());
console.log(person.getProfile());

// Task 9:

// Define variables to use as computed property names
const key1 = 'name';
const key2 = 'age';

// Create an object with computed property names
const person2 = {
    [key1]: 'Aman',
    [key2]: 23,
    
    // Adding a method with a computed property name
    ['isAdult'](){
        return this.age >= 18;
    }
}
console.log(person2);
console.log(person2.isAdult());

