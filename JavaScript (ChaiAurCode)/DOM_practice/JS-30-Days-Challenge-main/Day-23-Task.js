// Day 23: LeetCode Hard
// Tasks/Activities:

// Activity 1. Median of Two Sorted Arrays
// Task 1: Solve the Median of Two Sorted Arrays problem on LeetCode.
// Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays, Log the median for a few test cases, including edge cases.


let findMedianSortedArrays = function(nums1, nums2) {
    // Concatenate the two arrays into a single array `arr`
    let arr = nums1.concat(nums2);
    // Sort the combined array in ascending order
    arr.sort((a, b) => (a - b));

    // Get the length of the combined and sorted array
    let n = arr.length;
    
    // Check if the length of the array is even
    if (n % 2 === 0) {
        // If even, calculate the median as the average of the two middle numbers
        return ((arr[n / 2] + arr[n / 2 - 1]) / 2);
    } else {
        // If odd, the median is the middle number
        return arr[Math.floor(n / 2)];
    }
};
console.log(findMedianSortedArrays([1,3], [2])); // TC=O(log m+n), SC=O(m+n)



// Activity 2: Merge k Sorted Lists
// Task 2: Solve the "Merge k Sorted Lists problem on LeetCode.
// Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the Linked lists into one sorted linked list.
// Create a few test cases with linked lists and log the merged list.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    // Base case: if there are no lists, return null
    if (lists.length === 0) {
        return null;
    }

    // Continue merging until only one list remains
    while (lists.length > 1) {
        // Take the first two lists from the array
        let list1 = lists.shift();
        let list2 = lists.shift();

        // Merge the two lists and get the result
        let mergedList1List2 = mergeTwoLists(list1, list2);

        // Add the merged list back to the array
        lists.push(mergedList1List2);
    }

    // Return the single merged list
    return lists[0];
}

/**
 * Merge two sorted linked lists into one sorted linked list
 */
function mergeTwoLists(list1, list2) {
    // Create a dummy node to simplify the merging process
    let curr = new ListNode();
    let dummy = curr;

    // While both lists are not empty
    while (list1 && list2) {
        // Compare the values of the current nodes in both lists
        if (list1.val < list2.val) {
            // Attach the smaller node to the merged list
            curr.next = list1;
            // Move to the next node in list1
            list1 = list1.next;
        } else {
            // Attach the smaller node to the merged list
            curr.next = list2;
            // Move to the next node in list2
            list2 = list2.next;
        }
        // Move the current pointer in the merged list
        curr = curr.next;
    }

    // If there are remaining nodes in list1, attach them
    if (list1) {
        curr.next = list1;
    }

    // If there are remaining nodes in list2, attach them
    if (list2) {
        curr.next = list2;
    }

    // Return the merged list starting from the node after the dummy
    return dummy.next;
}
//console.log(mergeKLists([[1,4,5],[1,3,4],[2,6]]));



// Activity 3: Trapping Rain Water
// Task 3: Solve the Trapping Rain Water" problem on LeetCode
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining
// Log the amount of trapped water for a few test cases. 


let trap = function(height) {
    let left = 0;
 let right = height.length - 1;
 let lmax = height[left];
 let rmax = height[right];
 let ans = 0;

 while (left < right) {
     if (height[left] < height[right]) {
         lmax = Math.max(lmax, height[left]);  // Update lmax
         ans += lmax - height[left];           // Calculate trapped water at left position
         left++;                               // Move the left pointer rightward
     } else {
         rmax = Math.max(rmax, height[right]); // Update rmax
         ans += rmax - height[right];          // Calculate trapped water at right position
         right--;                              // Move the right pointer leftward
     }
 }
 return ans;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));





// Activity 4: N-Queens
// Task 4. Solve the 'N Queens' problem on LeetCode
// Write a function that places in queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the in queens puzzle
// Log the distinct solutions for a few test cases

let solveNQueens = function(n) {
    // Initialize a 2D array (board) of size n x n, filled with '.' representing empty cells.
    const board = new Array(n).fill(null).map(() => new Array(n).fill('.'));
    // Initialize an empty array (result) to store the solutions.
    const result = [];
   
    // Define a helper function couldPlace that checks if a queen can be placed at a given position (row, col) without being attacked by any other queen.
    function couldPlace(row, col) {
       // Loop through each row to check if there's a queen in the same column.
       for (let i = 0; i < n; i++) {
         // If a queen is found in the same column, return false.
         if (board[i][col] === 'Q') {
           return false;
         }
       }
       // Loop through the upper diagonal to check if there's a queen in the same diagonal.
       for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
         // If a queen is found in the same diagonal, return false.
         if (board[i][j] === 'Q') {
           return false;
         }
       }
       // Loop through the lower diagonal to check if there's a queen in the same diagonal.
       for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
         // If a queen is found in the same diagonal, return false.
         if (board[i][j] === 'Q') {
           return false;
         }
       }
       // If no queen is found in the same row, column, or diagonal, return true.
       return true;
    }
   
    // Define a recursive function backtrack that places queens on the board using backtracking.
    function backtrack(row = 0) {
       // Base case: If all queens are placed, add the current board configuration to the result array.
       if (row === n) {
         // Convert the board to a string representation and add it to the result array.
         const temp = board.map((x) => x.join(''));
         result.push(temp);
         return;
       }
       // For each column in the current row, try placing a queen.
       for (let col = 0; col < n; col++) {
         // If a queen can be placed at the current position, place it.
         if (couldPlace(row, col)) {
           board[row][col] = 'Q';
           // Recursively call backtrack to place queens in the next row.
           backtrack(row + 1);
           // Backtrack by removing the queen from the current position.
           board[row][col] = '.';
         }
       }
    }
   
    // Start the backtracking process from the first row.
    backtrack();
    // Return the result array containing all valid board configurations.
    return result;
}
   
// Call the solveNQueens function with n = 4 and log the result to the console.
console.log(solveNQueens(4));



// Activity 5. Word Ladder
// Task 5: Solve the "Word Ladder problem on LeetCode
// wite a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin ward to the end word such that only one letter can be changed at a time and
// each transformed word must exist in the word list. Log the length of the shortest transformation sequence for a few test cases

var ladderLength = function(beginWord, endWord, wordList) {
    // Convert the wordList to a set for O(1) lookups
    const wordSet = new Set(wordList);

    // If endWord is not in the wordList, return 0
    if (!wordSet.has(endWord)) return 0;

    // Initialize BFS queue with the beginWord and level 1
    const queue = [[beginWord, 1]];
    // Use a set to keep track of visited words
    const visited = new Set();
    visited.add(beginWord);

    while (queue.length > 0) {
        const [currentWord, level] = queue.shift();

        // Try all possible transformations of the currentWord
        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 'a'.charCodeAt(0); c <= 'z'.charCodeAt(0); c++) {
                const newChar = String.fromCharCode(c);
                if (newChar === currentWord[i]) continue;
                const newWord = currentWord.slice(0, i) + newChar + currentWord.slice(i + 1);

                // Check if the newWord is the endWord
                if (newWord === endWord) return level + 1;

                // If the newWord is in the wordSet and not visited
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    visited.add(newWord);
                    queue.push([newWord, level + 1]);
                }
            }
        }
    }

    // If no transformation sequence found, return 0
    return 0;
};
console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
