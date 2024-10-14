// Day 22: LeetCode Medium
// Tasks/Activities:
// Activity 1: Add Two Numbers
/// Task 1: Solve the "Add Two Numbers" problem on LeetCode.
// Write a function that takes two non-empty linked lists representing two non-negative integer. 
// The digits are stored in reverse order, and each node contains a single digit. Add the 
// two numbers and return the sum as a linked list, Create a few test cases with linked lists 
// and log the sum as a linked list.

function addTwoNumbers(l1,l2){
    let string1 = "", string2 = "";
    
    let temp1 = l1;

    while(temp1 !== null){
        string1 = temp1.val.toString() + string1;
        temp1 = temp1.next;
    }

    let temp2 = l2;

    while(temp2 !== null){
        string2 = temp2.val.toString() + string2;
        temp2 = temp2.next;
    }

    let sum = (BigInt(string1) + BigInt(string2)).toString().split("").reverse().join("");

    let dummy = new ListNode();
    let current = dummy;

    for(let digit of sum){
        current.next = new ListNode(parseInt(digit));
        current = current.next;
    }

    return dummyHead;
}

// Activity 2: Longest Substring Without Repeating Characters
// Task 2: Solve the "Longest Substring Without Repeating Characters" problem on
// LeetCode.
// Write a function that takes a string and returns the length of the longest substring
// without repeating characters.
// Log the length for a few test cases, including edges cases.


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
console.log(longestSubstring("abcabcbb"));


// Activity 3: Container With Most Water
// Task 3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer
// represents the height of a line drawn at each point. Find two lines that together 
// with the x-axis form a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases.

function maxArea(height){
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;

    while(left < right){
        let width = right - left;
        let currHeight = Math.min(height[right], height[left]);
        let area = width * currHeight;
        maxArea = Math.max(area, maxArea);


    if(height[left] < height[right]){
        left++;
    }else{
        right--;
    }
}
return maxArea;
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]));


// Activity 4: 3Sum
// Task 4: Solve the "3Sum" problem on LeetCode.
// Write a function that takes an array of integers and finds 
// all unique triplets in the array which gives the sum of zero.
// Log the triplets for a few test cases, including edge cases.


let threeSum = function(nums) {
     // Return an empty array if input is null or has fewer than 3 elements
  if (!nums || nums.length < 3) return [];

  // Sort the elements in ascending order
  nums.sort((a, b) => a - b);
  // Initialize a Set to store unique triplets
  const result = new Set();

  // Iterate through the array to fix the first element
  for (let i = 0; i < nums.length - 2; i++) {
    // Initialize two pointers: left and right
    let left = i + 1;
    let right = nums.length - 1;

    // Use a while loop to find the other two elements
    while (left < right) {
      // Calculate the sum of the current triplet
      const sum = nums[i] + nums[left] + nums[right];

      // If the sum is zero, add the triplet to the result set
      if (sum === 0) {
        // Convert the triplet to a string to store in the set
        result.add([nums[i], nums[left], nums[right]].toString());
        // Move both pointers to find other potential triplets
        left++;
        right--;
      } else if (sum < 0) {
        // If the sum is less than zero, move the left pointer to increase the sum
        left++;
      } else {
        // If the sum is greater than zero, move the right pointer to decrease the sum
        right--;
      }
    }
  }

  // Convert the Set to an array of arrays
  // Convert each string representation of a triplet back to an array of numbers
  return Array.from(result).map(str => str.split(',').map(Number));
}

console.log(threeSum([-1,0,1,2,-1,-4]));


// Activity 5: Group Anagrams
// Task5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups
// anagrams together. Log the grouped anagrams for a few test cases.



let groupAnagrams = function(strs) {
    // Create a map to group anagrams
    const map = new Map();
    
    // Iterate through each string in the input array
    for (const str of strs) {
        // Sort the characters of the string to get the canonical form
        const sortedStr = str.split('').sort().join('');
        
        // If the canonical form is not in the map, initialize an empty array
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        // Add the original string to the appropriate group in the map
        map.get(sortedStr).push(str);
    }
    
    // Convert the grouped anagrams in the map to an array of arrays
    return Array.from(map.values());
};

const test1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const test2 = ["abc", "bca", "cab", "dog", "god", "odg"];
const test3 = ["a"];
const test4 = ["", "b", "b"];

console.log(groupAnagrams(test1)); // Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
console.log(groupAnagrams(test2)); // Output: [['abc', 'bca', 'cab'], ['dog', 'god', 'odg']]
console.log(groupAnagrams(test3)); // Output: [['a']]
console.log(groupAnagrams(test4)); // Output: [[''], ['b', 'b']]

 




