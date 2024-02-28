// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // Explicitly declearing an Array
console.log(myArr[1]); // 1th Inedex of an Array

// Array methods

myArr.push(6) // add new data into the last
myArr.push(7) 
myArr.pop() // remove the last data

myArr.unshift(9) // add new data in front 
myArr.shift()  // delete new data from front

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join() // Convert the array into string comma(,) separated

console.log(myArr);
console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // Returns a copy of a section of an array.

console.log(myn1);
console.log("B ", myArr);

 
const myn2 = myArr.splice(1, 3) // Removes the elements from s selected rane from an array and, if necessary, inserts new elements in their place, returning the removed elements. 
console.log("C ", myArr);
console.log(myn2);