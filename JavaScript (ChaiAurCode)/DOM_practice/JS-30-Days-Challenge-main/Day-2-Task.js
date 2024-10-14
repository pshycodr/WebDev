// Day 2: Operators

// Task/Activities:
// Activity 1: Arithmetic Operations
// Task 1: Write a program to add two numbers and log the result to the console.

let num1 = 10;
let num2 = 20;

// Calculate the sum
let sum = num1 + num2;

// Log the sum to the console
console.log("The sum of", num1, "and", num2, "is:", sum);

// Task 2: Write a program to subtract two numbers and log the result to the console.

let num3 = 50;
let num4 = 20;

// Calculate the subtraction
let subtract = num3 - num4;

// Log the subtraction to the console
console.log("The subtract of", num3, "and", num4, "is:", subtract);

// Task 3: Write a program to multiply two numbers and log the result to the console.

let num5 = 10;
let num6 = 20;

// Calculate the division
let multiply = num5 + num6;

// Log the sum to the console
console.log("The multiply of", num5, "and", num6, "is:", multiply);

// Task 4: Write a program to divide two numbers and log the result to the console.

let num7 = 10;
let num8 = 20;

// Calculate the sum
let divide = num7 + num8;

// Log the sum to the console
console.log("The sum of", num7, "and", num8, "is:", divide);

// Task 4: Write a program to remainder two numbers and log the result to the console.

let num9 = 30;
let num10 = 10;

// Calculate the sum
let remainder = num9 % num10;

// Log the sum to the console
console.log("The remainder of", num9, "and", num10, "is:", remainder);


// Activity 2: Assignment Operators
// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let num11 = 10;
let inc = 5;

num11 += inc;
console.log(`The new value of number is ${num11}`);

// Task 7: Use the -= operator to subtract a number to a variable and log the result to the console.

let num12 = 10;
let dec = 5;

num12 -= dec;
console.log(`The new value of number is ${num12}`);


// Activity 3: Comparison Operators
// Task 8: Write a program to compare two numbers using > and < and log the result to the console.

const num13 = 10;
const num14 = 20;

const isGreater = num13 > num14;
const isSmaller = num13 < num14;
console.log(`${num13} > ${num14} is ${isGreater}`);
console.log(`${num13} < ${num14} is ${isSmaller}`);

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

const num15 = 25;
const num16 = 30;

const isGreaterEqual = num15 >= num16;
const isSmallerEqual = num15 <= num16;
console.log(`${num15} >= ${num16} is ${isGreaterEqual}`);
console.log(`${num15} <= ${num16} is ${isSmallerEqual}`);

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

const num17 = 30;
const num18 = '30';

const isEqualDouble = num17 == num18;
const isEqualTriple = num17 === num18;
console.log(`${num17} == ${num18} is ${isEqualDouble}`);
console.log(`${num17} === ${num18} is ${isEqualTriple}`);

// Activity 4: Logical Operators
// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

const age = 25;
const hasDrivingLicense = true;

const canRentCar = age >= 21 && hasDrivingLicense;

// Log the result to the console
console.log(`Age is ${age}, has driving license: ${hasDrivingLicense}`);
console.log(`Can rent a car: ${canRentCar}`);


// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

const hasTicket = false;
const isVIP = true;

const canEnterConcert = hasTicket || isVIP;

// Log the result to the console
console.log(`Has ticket: ${hasTicket}, is VIP: ${isVIP}`);
console.log(`Can enter concert: ${canEnterConcert}`);

// Task 13: Write a program that uses the ! operator to combine two conditions and log the result to the console.

const isRaining = true;
const willGetRain = !isRaining;
console.log(`Is it raining: ${willGetRain}`);

// Activity 5: Ternary Operator
// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

const num19 = -5;
const result = num19 >= 0 ? 'positive' : 'negative';

console.log(`The number ${num19} is ${result}`);

// Feature Request:
// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (Addition, subtraction, multiplication, division, remainder) on two numbers and log the results.

const number1 = 15;
const number2 = 4;

const addition = number1 + number2;
const subtraction = number1 - number2;
const multiplication = number1 * number2;
const division = number1 / number2;
const remainder2 = number1 % number2;


console.log(`Addition of ${number1} and ${number2} is: ${addition}`);
console.log(`Subtraction of ${number1} and ${number2} is: ${subtraction}`);
console.log(`Multiplication of ${number1} and ${number2} is: ${multiplication}`);
console.log(`Division of ${number1} by ${number2} is: ${division}`);
console.log(`Remainder of ${number1} divided by ${number2} is: ${remainder2}`);

// 2. Comparison and Logical Operators Script: Write a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

const num20 = 10;
const num21 = 20;

// Comparison operators
const isEqual = num20 == num21;      // Using ==
const isStrictEqual = num20 === num21; // Using ===
const isGreater2 = num20 > num21;     // Using >
const isSmaller2 = num20 < num21;     // Using <

const isNotEqual = num20 != num21;   // Using !=
const isNotStrictEqual = num20 !== num21; // Using !==

// Logical operators
const bothConditions = (num20 < 15 && num21 > 15); // Using &&
const eitherCondition = (num20 < 15 || num21 < 15); // Using ||

const notCondition = !(num20 > num21); // Using !


console.log(`Is ${num20} equal to ${num21}? ${isEqual}`);
console.log(`Is ${num20} strictly equal to ${num21}? ${isStrictEqual}`);
console.log(`Is ${num20} greater than ${num21}? ${isGreater2}`);
console.log(`Is ${num20} smaller than ${num21}? ${isSmaller2}`);
console.log(`Is ${num20} not equal to ${num21}? ${isNotEqual}`);
console.log(`Is ${num20} not strictly equal to ${num21}? ${isNotStrictEqual}`);
console.log(`Are both conditions (num20 < 15 && num21 > 15) true? ${bothConditions}`);
console.log(`Is either condition (num20 < 15 || num21 < 15) true? ${eitherCondition}`);
console.log(`Is it NOT true that ${num20} is greater than ${num21}? ${notCondition}`);

// 3. Ternary Operator Script" Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

const num22 = -7; // Change this value to test with different numbers

const result2 = num22 >= 0 ? 'positive' : 'negative';

// Log the result to the console
console.log(`The number ${num22} is ${result2}.`);
