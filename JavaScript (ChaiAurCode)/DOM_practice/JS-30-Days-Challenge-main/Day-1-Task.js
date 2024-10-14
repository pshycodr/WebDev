// Activity 1: Variable Declaration
// Task 1

var num = 10;
console.log("The number is",num);

// Task 2

let str = "Aman";
console.log("My name is", str);


// Activity 2: Constant Declaration
// Task 3:
const bool = true;
console.log("Are you ok",bool);

// Activity 3: Data Types
// Task 4:

const info = {number:num, name:str, message: bool};
const fav = ["Cricket", "Football", "Reading"];

console.log("The num type is",typeof num);
console.log("The str type is",typeof str);
console.log("The bool type is",typeof bool);
console.log("The info type is",typeof info);
console.log("The fav type is",typeof fav);
console.log("The fav type is",Array.isArray(fav));


// Activity 4: Reassigning Variables
// Task 5:
let variable = 25;
console.log("Initial Value", variable);

variable = 40;
console.log("New Value", variable);

// Activity 5: Understanding const
// Task 6:
// const variable2 = 67;
// console.log("My value is", variable2);

// variable2 = 97;
// console.log("My new value is", variable2);// TypeError: Assignment to constant variable.

// Feature Request
// 1-> Variable Type Console Log:
console.log(`Value ${num} and its type ${typeof num}`);
console.log(`Value ${str} and its type ${typeof str}`);
console.log(`Value ${bool} and its type ${typeof bool}`);
console.log(`Value ${JSON.stringify(info)} and its type ${typeof info}`);
console.log(`Value ${fav} and its type ${typeof fav}`);


//2-> Reassignment Demo:

let exmp = "a";
exmp = "b";
console.log(exmp); 


const exmp1 = "c";
exmp1 = "d";
console.log(d); // TypeError: Assignment to constant variable.
 
