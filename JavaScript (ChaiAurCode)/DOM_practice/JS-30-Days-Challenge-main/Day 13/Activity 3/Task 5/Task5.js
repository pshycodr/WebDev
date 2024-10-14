// Importing Entire Modules

// Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties. 
const PI = 3.14159;
const E = 2.71828;

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b === 0){
        throw new Error('Division by zero is not allowed.')
    }
    return a/b;
}

module.exports = {
    PI,
    E,
    add,
    subtract,
    multiply,
    divide
}