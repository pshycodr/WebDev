// Day 4: Loops
// Tasks/Activities
// Activity 1: For Loop
// Task 1:
for(let i=1;i<=10;i++){
    console.log(i);
}

// Task 2:
for(let i = 1; i <= 10; i++){
    console.log(i*5);
}

// Activity 2: While Loop
// Task 3:
let sum = 0;
let i = 1;

while(i <= 10){
    sum += i;
    i++;
}
console.log("The sum of numbers from 1 to 10 is: " + sum);

// Task 4:
let i1 = 10;

while(i1 >= 1){
    console.log("The numbers from 10 to 1 is: " + i1);
    i1--;
}

// Activity 3: Do... While Loop
// Task 5:

let i2 = 1;

do{
    console.log("The numbers from 1 to 5 are: ", i2);
    i2++;
}while(i2 <= 5);


// Task 6:
let num = 5;
let fact = 1;
let i3 = 1;

do{
    fact *= i3;
    i3++;
}while(i3 <= num);

console.log(`The factorial of ${num} is: ${fact}`);

// Activity 4: Nested Loops
// Task 7:
for(let i4=1;i4<=5;i4++){
    let pattern = "";
    for(let j=1;j<=i4;j++){
        pattern += "* ";
    }
    console.log(pattern);
}

// Activity 5: Loop Control Statements
// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
for(let i=1; i<=10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for(let i=1;i<=10;i++){
    if(i === 7){
        break;
    }
    console.log(i);
}
