// Name and Default Exports
// Create a module that exports multiple functions using exports. Import and use these functions in another script.

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    if(b === 0){
        throw new Error('Division by zero is not allowed.');
    }
    return a / b;
}

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
