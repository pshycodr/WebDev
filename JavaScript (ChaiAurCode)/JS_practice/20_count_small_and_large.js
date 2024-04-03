/*You are given an array A of size N. 
Find how many elements, there is a strictly smaller element and a strictly greater element */

function smaller_larger_element(arr) {
  const len = arr.length;
  let minElement = arr[0];
  let maxElement = arr[0];

  arr.forEach((element) => {
    if (element > maxElement) {
      maxElement = element;
    } else if (element < minElement) {
      minElement = element;
    }
  });

  let count = 0;

  for (const element of arr) {
    if (element < maxElement && element > minElement) {
      count++;
    }
  }

  return count;
}

const Array = [1, 2, 3, 4];

console.log(smaller_larger_element(Array));
