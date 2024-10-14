// Day 14: Classes
// Tasks/Activities:
// Activity 1: Class Definition
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of a class and log the greeting message.

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hello, my name is ${this.name} ane I am ${this.age} years old.`
    }
}

const person1 = new Person('Aman', 23);
console.log(person1.greet());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
class PersonNew {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

// Create an instance of the Person class
const person2 = new PersonNew('Aman', 25);

// Log the initial greeting message
console.log(person2.greet());

// Update the age and log the updated age
person2.updateAge(26);

// Log the updated greeting message
console.log(person2.greet());


// Activity 2: Class Inheritance
// Task 3: Define a class student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class PersonLatest {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updatedAge(newAge){
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

class Student extends PersonLatest{
    constructor(name,age,studentId){
        super(name,age); // Calling the constructor of the parent class(PersonLatest)
        this.studentId = studentId;
    }
    getStudentId(){
        return `Student ID: ${this.studentId}`;
    }
}

const student1 = new Student('Aman', 23, '12345');

console.log(student1.greet());
console.log(student1.getStudentId());

// Task 4: Override the greeting method in the Student class to include the Student ID in the message. Log the overridden greeting message.
class PersonLatest2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge) {
        this.age = newAge;
        console.log(`Updated age: ${this.age}`);
    }
}

class Student2 extends PersonLatest2 {
    constructor(name, age, studentId) {
        super(name, age); // Call the constructor of the parent class (Person)
        this.studentId = studentId;
    }

    // Override the greet method
    greet() {
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    getStudentId() {
        return `Student ID: ${this.studentId}`;
    }
}

// Create an instance of the Student class
const studentNew = new Student2('Aman', 25, 'S12345');

// Log the overridden greeting message
console.log(studentNew.greet());


// Activity 3: Static Methods and Properties
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating of the class and log the message.
class Person2 {
    // Static method
    static genericGreeting(){
        return `Hello! Welcome to our system.`
    }
}

console.log(Person2.genericGreeting());

// Task 6: Add a static property to the Student class to keep of the number of student created. Increment this property in the constructor and log the total number of students.
class Student3 {
     // Static property to keep track of the number of students
    static studentCount = 0;

    constructor(name, age,studentId){
        this.name = name;
        this.age = age;
        this.studentId = studentId;
        // Increment the student count each time a new instance is created
        Student3.studentCount++;
    }
    // Static method to get the total number of students
    static getStudentCount(){
        return Student3.studentCount;
    }
}

const student2 = new Student3("Aman", 23, "1234566");
const student3 = new Student3("Naman", 24, "1234988");

console.log(`Total number of students: ${Student3.getStudentCount()}`);

// Activity 4: Getters And Setters
// Task 7: Add a getter method to the Person class to return the full name(assume a firstName and lastName property). Create an instance and log the full name using the getter.
class PersonLatest3 {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // Getter method to return the full name
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// Create an instance of the PersonLatest3 class
const person3 = new PersonLatest3("Aman", "Roy", 23);

console.log(person3.fullName);


// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
class PersonLatest4 {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Getter method to return the full name
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    // Setter method to update the name
    set fullName(name){
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Create an instance of the Person class
const person4 = new PersonLatest4('Aman', 'Roy', 25);

// Log the initial full name
console.log(person4.fullName);  // Output: Aman Roy

// Update the name using the setter
person4.fullName = 'John Doe';

// Log the updated full name
console.log(person4.fullName);  // John Doe