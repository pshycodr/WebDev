// Day 6: Arrays
// Tasks/Activities:
// Task 1:
let arr = [1,2,3,4,5];
console.log(arr);

// Task 2:
let arr2 = [1,2,3,4,5,6,7];
console.log(arr[0]);
console.log(arr.length-1);

// Activity 2: Array Methods (Basic)
// Task 3:
let arr3 = [1,2,3,4];
let result = arr3.push(6);
console.log(arr3);

// Task 4:
let arr4 =[1,2,3,4,5];
let result2 = arr4.pop();
console.log(arr4);

// Task 5:
let arr5 = [1,2,3,4,5];
let result3 = arr5.shift();
console.log(arr5);

// Task 6:
let arr6 = [1,2,3,4,5];
let result4 = arr6.unshift(0);
console.log(arr6);

// Activity 3: Array Methods (Intermediate)
// Task 7:
// Type 1:
let num = [1,2,3,4,5];
let res = num.map((num) => num * 2);
console.log(res);

// Type 1:
const numbers = [1,2,3,4,5];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);

// Task 8:
const num2 = [1,2,3,4,5,6,7,8];
let res1 = num2.filter(num2 => num2 % 2 === 0)
console.log(res1);

// Task 9:
const num3 = [1,2,3,4,5,6,7,8];
let res3 = num3.reduce((acc,curr) => acc+curr, 0);
console.log(res3);

// Activity 4: Array Iteration
// Task 10:
let arr7 = [1,2,3,4,5,6,7,8];
for(let i=0;i<arr7.length;i++){
    console.log(arr7[i]);
}

// Task 11:
let arr8 = [1,2,3,4,5,6,7,8];
let res4 = arr8.forEach(num => {
    console.log(num);
})

// Activity 5: Multi-Dimensional Arrays
// Task 12:
 const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
 ];
 console.log(matrix);

 // Task 13:
 const matrix2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
 ];

 let specificElement = matrix2[2][2];
 console.log(specificElement);//9