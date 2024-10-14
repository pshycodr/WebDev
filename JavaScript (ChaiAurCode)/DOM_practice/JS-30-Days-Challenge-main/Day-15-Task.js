// Day 15: Closures
// Tasks/Activities:
// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction(outerVariable) {
    // The inner function accesses the outerVariable from the outerFunction's scope
    return function innerFunction() {
        return outerVariable;
    };
}

// Create an instance of the inner function
const myInnerFunction = outerFunction('Hello, World!');

// Call the inner function and log the result
console.log(myInnerFunction()); // Output: Hello, World!


// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter(){
    let count = 0; // Private variable
    return {
        increment: function(){
            count++;
        },
        getValue: function(){
            return count;
        }
    };
}

// Create an instance of the counter
const myCounter = createCounter();

// using the counter
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue());

myCounter.increment();
console.log(myCounter.getValue());

// Activity 2: Practical Closures
// Task 3: Write a function that generates uniqueIDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createUniqueIDGenerator(){
    let lastID = 0; // Private Variable to keep track of the last generated ID

    return function(){
        lastID++; // Incrementing the ID
        return `ID-${lastID}`
    }
}

//Creating an instance of the ID generator
const generateUniqueID = createUniqueIDGenerator();
console.log(generateUniqueID());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function captureUserName(userName){
    // The outer function captures the user's name
        return function(){
                // The inner function uses the capatured name
                return `Hello, ${userName}!`
        }
}

let greet = captureUserName("Aman");
console.log(greet());

// Activity 3: Closures in Loops:
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

const functionsArray = [];

// creating 5 functions
for(let i=0;i<5;i++){
    functionsArray[i] = function(){   // In each loop iteration, we create a new function and assign it to the ith position in the array. Each function logs i.
        console.log(i);
    }
}

// Calling Functions
functionsArray[0]();
functionsArray[1]();
functionsArray[2]();
functionsArray[3]();
functionsArray[4]();


// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
function createItemManager(){
    let items = []; // Private variable to store the collection of the items

    return{
        // Method to add an item
        addItems:function(item){
            items.push(item);
        },
        // Method to remove an item
        removeItems:function(item){
            items = items.filter(existingItem => existingItem !== item);
        },
        listItems: function() {
            return items.slice(); // Return a copy of the items array
        }
    }
}

const itemManager = createItemManager();

itemManager.addItems('Apple');
itemManager.addItems('Banana');
itemManager.addItems('Orange');

console.log(itemManager.listItems());

itemManager.removeItems("Banana");

console.log(itemManager.listItems());

// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function squareMemoize(fn){
    const cache = {}; // Object to store results of previous computations

    return function(x){
        // Checking if the result is already in the cache
        if(cache[x] !== undefined){
            console.log("Returning from cache...");
            return cache[x];
        }
        // Calculating the result if not in cache
        console.log("Calculating result...");
        const res = fn(x);
        cache[x] = res; // Store the result in cache
        return res;
    }
}

function square(x){
    return x * x;
}

// Creating a memoized version of the square function
const memoizedSquare = squareMemoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(10));

// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function factorialMemoize(fn){
    const cache = {}; // Object to store results of previous computations

    return function(x){
        // Checking if the result is already in the cache
        if(cache[x] !== undefined){
            console.log("Returning from cache...");
            return cache[x];
        }
        // Calculating the result if not in cache
        console.log("Calculating result...");
        const res = fn(x);
        cache[x] = res; // Store the result in cache
        return res;
    }
}

function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n * factorial(n-1);
}

// Creating a memoized version of the square function
const memoizedFactorial = factorialMemoize(factorial);

console.log(memoizedFactorial(5));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(6));
