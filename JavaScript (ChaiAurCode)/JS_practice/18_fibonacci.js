// Write a program to generate the nth Fibonacci number using recursion.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

const n = 10;
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);
