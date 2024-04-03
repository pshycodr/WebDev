// Create a function to find the factorial of a number.


function factorial(num){
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i
    }
    return fact;
}

const num = 6;
console.log(factorial(num));
