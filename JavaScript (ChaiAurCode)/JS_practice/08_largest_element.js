// Create a program to find the largest element in an array.

function largestElement(array) {
  let largeNum = array[0];
  array.forEach((element) => {
    if (largeNum < element) {
      largeNum = element;
    }
  });
  return largeNum;
}

const array = [5, 99, 12, 8, 35, 20, 7, 42, 55, 66, 1, 2, 3, 19, 3, 28];
console.log(largestElement(array));
