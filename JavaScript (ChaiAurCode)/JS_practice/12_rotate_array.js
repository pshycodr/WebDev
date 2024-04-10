// Create a function to rotate an array to the right by a given number of steps.

function rotateArray(arr, rotateValue) {
  const len = arr.length - 1;
  for (let i = 0; i < rotateValue; i++) {
    const temp = arr[len];
    arr.pop();
    arr.unshift(temp);
  }

  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 4, 3, 4, 5, 3, 1, 33, 5, 6, 7, 8, 9, 0];
const rotateValue = 4;
console.log(rotateArray(arr, rotateValue));

