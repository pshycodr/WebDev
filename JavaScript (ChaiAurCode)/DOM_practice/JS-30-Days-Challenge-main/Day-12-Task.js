// Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError(){
    throw new Error("Something went wrong!");
}
try{
    throwError();
}catch(error){
    console.error("An error occurred:", error.message);
}

// Task 2: Create a function that divides two numbers and throw an error if the denominator is zero. Use a try-catch block to handle this error.
function divideTwoNumbers(numerator, denominator){
    if(denominator === 0){
        throw new Error("Denominator cannot be zero.")
    }
    return numerator / denominator;
}

try{
   let result = divideTwoNumbers(10,0);
   console.log("Result:", result);
}catch(error){
    console.error("An error occurred:", error.message);
}

// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function testTryCatchFinally(){
    try{
        console.log("Inside try block");
        throw new Error("An error occurred in the try block.")
    }catch(error){
        console.log("Inside catch block");
        console.error("Caught error:", error.message);
    }finally{
        console.log("Inside finally block");
    }
}
testTryCatchFinally();

// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error{
    constructor(message){
        super(message); // Call the parent class constructor with the error message
        this.name = 'CustomError'; // Set the name property to the name of the custom error
    }
}

// Function that throws an instance of CustomError
function testCustomError()
{
    throw new CustomError("This is a custom error message.");
}

// Handling the custom error with try-catch
try{
    testCustomError();
}catch(error){
    if(error instanceof CustomError){
        console.error("Caught a CustomError:", error.message);
    }else{
        console.error("Caught an unexpected error:", error.message);
    }
}

// Task 5: Write a function that validates user input(eg., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
// Function to validate user input
function validateUserInput(input){
    if(input.trim() === ''){
        throw new ValidationError("Input cannot be empty.");
    }
      return "Input is valid.";
}

// Handling the validation error with try-catch
function processUserInput(input){
    try{
        const result = validateUserInput(input);
        console.log(result);
    }catch(error){
        if(error instanceof ValidationError){
            console.error("Validation error:", error.message);
        }else{
            console.error("An unexpected error occurred:", error.message);
        }
    }
}
processUserInput("");

// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects.Use .catch() to handle the rejection and log an appropriate message to the console.
function createRandomPromise(){
    return new Promise((res, rej) => {
        // Simulate a delay for the promise
        setTimeout(() => {
            // Randomly resolve or reject the promise
            const isSuccess = Math.random() > 0.5; // 50% chance to resolve or reject
            if(isSuccess){
                res("Promise resolved successfully!");
            }else{
                rej("Promise rejected due to random failure.");
            }
        }, 1000)
    })
}

// Using the promise and handling rejection
createRandomPromise()
.then(result => {
    console.log(result); // Logs if the promise is resolved
})
.catch(error => {
    console.error("Caught an error:", error); // Logs if the promise is rejected
})

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message
function createRandomPromise2(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            const isSuccess = Math.random() > 0.5;
            if(isSuccess){
                res("Promise resolved successfully!");
            }else{
                rej("promise rejected due to random failure.")
            }
         }, 2000);
    })
}
async function handlePromise(){
    try{
        const result = await createRandomPromise2();
        console.log(result);
    }catch(error){
        console.error("Caught an error:", error);
    }
}

// Calling the async function
handlePromise();

// Activity 5: Graceful Error Handling in Fetch
// Task 8: use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

// Define an invalid URL
const invalidUrl = "https://invalid-url.example.com";

// Use the fetch API to request data from the invalid URL
fetch(invalidUrl)
  .then(response => {
    // Check if the response status is not OK (e.g., 404 or 500 errors)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parse the JSON from the response
  })
  .then(data => {
    console.log("Data received:", data); // Log the received data (not expected in this case)
  })
  .catch(error => {
    console.error("Caught an error:", error.message); // Log the error message
  });



// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchDataFromInvalidUrl(){
    const invalidUrl2 = "https://invalid-url.example.com";

    try{
        // Make the fetch request
        const response = await fetch(invalidUrl2);
        
         // Check if the response status is OK (status in the range 200-299)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

     // Parse the response JSON
    const data = await response.json();
    console.log("Data received:", data);
    }catch(error){
        // Handle errors and log an appropriate message
    console.error("Caught an error:", error.message);
    }
}

// Calling the async function
fetchDataFromInvalidUrl();