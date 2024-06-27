// function* myGenerator(){
//     yield function addNum(num1, num2) {
//         return num1 + num2
//     }

//     yield 2;
//     yield 3;
//     yield 4;

// }

// const gen = myGenerator()

// while (true) {
//     let done = gen.next()
//     if(done.done == true) break;
//     console.log(done);
// }


// function* fibonacci() {
//     let prev = 0, curr = 1;
//     while (true) {
//         yield curr;
//         [prev, curr] = [curr, prev + curr];
//     }
// }

// const fibonacciGenerator = fibonacci();

// // Print the first 10 Fibonacci numbers
// for (let i = 0; i < 10; i++) {
//     console.log(fibonacciGenerator.next().value);
// }





