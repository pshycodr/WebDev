// Day 5: Functions
// Tasks/Activities:
// Activity 1: Function Declaration
// Task 1: Write a function in javascript to check if a number is even or odd and log the result to the console.
function checkEvenOrOdd(number){
    if(number % 2 === 0){
        console.log(number + " is even.");
    }else{
        console.log(number + " is odd.");
    }
}
checkEvenOrOdd(10);

// Task 2: Write a function to calculate the square of a  number and return a result
function squareNumber(number){
    return number * number;
}
let result = squareNumber(4);
console.log("The square of a number is :", result);

// Activity 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console 
function maxTwoNumbers(num1, num2){
    if(num1 > num2){
        console.log(num1 + " is the maximum.");
    }else if(num2 > num1){
        console.log(num2 + " is the maximum.");
    }else{
        console.log("Both numbers are equal.");
    }
}
maxTwoNumbers(10, 5);

// Task 4: Write a function expression to concatenate two strings and return the result
function concatTwoStrings(string1, string2){
    return string1 + string2;
}
let result2 = concatTwoStrings("Aman ", "Roy");
console.log(result2);

// Activity 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
// Type 1:
let sum = ((num1, num2) => {
    return num1 + num2; 
}) 
let result3 = sum(5,7);
console.log(result3);

// Type 2:
let sum2 = (num1, num2) => num1 + num2;
let result4 = sum2(4,4);
console.log(result4);

// Task 6: Write an arrow function to check if a string contains a special character return a  boolean value
let containSpecialChar = ((s) => {
    let specialChar = /[!@#$^&*(),.?":{}|<>]/;
    return specialChar.test(s);
})
let result5 = containSpecialChar("HowAreYou!");
console.log(result5);

// Activity 4: Function Parameters and Default Values
// Task 7: Write a function  that takes two parameters and returns their product. Provide a default value for a second parameter.
function product(num1, num2 = 7){
    return num1 * num2;
}
let result6 = product(5);
console.log(result6);

// Task 8: Write a function that has a function name and age and returns a greeting message. provide a default value for the age
function details(name, age = 23){
    return `Hello, ${name}! You are ${age} years old.`;
}
let message = details("Aman");
console.log(message);

// Activity 5: Higher-Order Functions-> A function that takes one or more functions as an argument or returns a function as a result.
// Task 9: Write a higher order function that takes a function and a number and calls the function that many times
function repeatFunction(fn, times){
    for(let i=0; i<times; i++){
        fn();
    }
}
    let greet = () => {
        console.log("Hello Everyone");
    }
    repeatFunction(greet, 4);

    // Task 10: Write a higher order function that takes two function and a value, applies the first function to the value, and then applies the second function to the result.
    function applyFunctions(fn1, fn2, value){
        let firstResult = fn1(value);
        return fn2(firstResult);
    }

    let square = (x) => x * x;
    let half = (y) => y / 2;

    let finalOutput = applyFunctions(square, half, 4);
    console.log(finalOutput);