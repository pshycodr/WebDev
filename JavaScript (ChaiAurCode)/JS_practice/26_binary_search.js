function binarySearch(arr, find) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    if (arr[mid] === find) {
      return mid;
    } else if (arr[mid] > find) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }

  console.log("not found")
  return -1
}

const arr = [
  10, 17, 21, 28, 30, 35, 36, 48, 52, 66, 71, 85, 90, 91, 93, 94, 98,
];

let find = 94;
console.log(binarySearch(arr, find));
console.log(arr[15]);
