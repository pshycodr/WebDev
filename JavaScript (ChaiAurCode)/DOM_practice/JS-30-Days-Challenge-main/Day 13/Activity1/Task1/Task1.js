// Tasks/Activities:
// Activity 1: Creating and exporting Modules
// Task 1: Create a module that exports a function to add two numbers. Import and use the module in another script. 

// Function to add two numbers

function add(a,b){
    return a + b;
}

// Exporting the function
module.exports = add;