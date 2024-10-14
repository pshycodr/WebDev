// Day 18: Algorithms
// Tasks/Activities:
//Activity 1: Sorting Algorithms
// Task 1:Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr){
   for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
   }
   return arr;
}
console.log(bubbleSort([7,5,3,6,8,1])); // TC=O(n^2), SC=O(1)

// Task 2:Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex = i;
        for(let j=i+1;j<arr.length;j++){
             if(arr[j] < arr[minIndex]){
                 minIndex = j;
             }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
console.log(selectionSort([9,6,8,4,2])); // TC=O(n^2), SC=O(1)

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr){
    // Base Case 
    if(arr.length <= 1){
        return arr;
    }
    const pivot = arr[0];
    const left = [];
    const right = [];
    for(let i=1;i<arr.length;i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
}
console.log(quickSort([5,2,9,3,6,1,8,7])); // TC=O(nlogn) for best and average case, Worst Case-> O(n^2), SC=O(n)

// Activity 2: Searching Algorithms
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([4,5,6,7,0,1,2],0)); //TC=O(n), SC=O(1)

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(nums,target){
    let left = 0;
    let right = nums.length-1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] === target){
            return mid;
        }else if(nums[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7], 5));// TC=O(logn), SC=O(1)

// Activity 3: String Algorithms
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function charCount(str){
    let charCount = {};

    for(let char of str){

       if(charCount[char]){
        charCount[char]++;
       }else{
        charCount[char] = 1;
       }
    }
    return charCount;
}
console.log(charCount("Hello World")); // TC=O(n), SC=O(n)

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function longestSubstring(s){
    let left = 0;
    let right = 0;
    let maxLength = 0;
    let charSet = new Set();

    while(right < s.length){
        if(!charSet.has(s[right])){
            charSet.add(s[right]);
            right++;
            maxLength = Math.max(maxLength, right - left);
        }else{
            charSet.delete(s[left]);
            left++;
        }
    }
    return maxLength;
}
console.log(longestSubstring("abcabcbb"));// TC=O(n), SC=O(n)

// Activity 4: Array Algorithms
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k){
    const n = arr.length;
    // K to be within the bounds of the array length
    k = k % n;
 
    // Function to reverse a part of the array
    function reverse(start, end){
        while(start < end){
            [arr[start],arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    // Reverse the entire array
    reverse(0, n-1);
    // Reverse the first part 
    reverse(0, k-1);
    //Reverse the second part(k to end)
    reverse(k, n-1);

    return arr;
}
console.log(rotateArray([1,2,3,4,5,6,7], 3)); //TC=O(n), SC=O(1)

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // Traverse both arrays and merge them
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // If there are remaining elements in arr1, add them
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // If there are remaining elements in arr2, add them
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}
console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));// TC=O(m+n), SC=O(m+n)
