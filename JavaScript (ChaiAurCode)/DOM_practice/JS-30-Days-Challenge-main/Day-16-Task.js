// Day 16: Recursion
// Tasks/Activities
// Activity 1: Basic Recursion
// Task 1: Write a recursive function to calculate the factorial of number. Log the result for a few test cases.
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    // Recursive Call
    return n * factorial(n-1);
}
console.log(factorial(5)); // 120,  TC=O(n), SC=O(n)

// Task 2: Write a recursive function to calculate the nth fibonacci number. Log the result for a few test cases.
function fibonacci(n){
    // Base Case
    if(n <= 1){
        return n;
    }
    // Recursive Call
    return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(6)); // 8, TC=O(2^n), SC=O(n)

// Activity 2: Recursion with Arrays
// Task 3: Write a recursive function to find the sum of all the elements in an array. Log the result for a few test cases.
function sum_arr(arr,i){
    // Base Case
    if(i >= arr.length){
        return 0;
    }
    // Recursive Call
    return arr[i] + sum_arr(arr,i+1);
}
console.log(sum_arr([1,2,3,4,5],0)); // 15. TC=O(n), SC=O(n)

// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function maxElement(arr,i){
    // Base Case
    if(i >= arr.length){
        return 0;
    }
    // Recursive Call
     return Math.max(arr[i], maxElement(arr,i+1));
}
console.log(maxElement([67,43,234,666,76,342],0));// 666, TC=O(n), SC=O(n)

// Activity 3: String Manipulation with Recursion
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function revString(str){
    //Base Case: If the string is empty or has one character, return the string itself
    if(str.length <= 1){
        return str; 
    }
    return revString(str.slice(1)) + str[0];
}
console.log(revString("Aman"));// namA, TC=O(n), SC=O(n)

// Activity 4: Recursive Search
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element of a few test cases.
function binarySearch(arr,target,left=0,right=arr.length-1){
       if(left > right){
           return -1;
       }
       let mid = Math.floor((left + right) / 2);
       if(arr[mid] === target){
        return mid;
       }
       if(arr[mid] < target){
        return binarySearch(arr,target,mid+1,right)
       }else{
        return binarySearch(arr,target,left,mid-1)
       }
}
console.log(binarySearch([2,3,4,5,6,7],4)); // 2, TC=O(log n), SC=O(log n)

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr,target,index=0){
    // Base Case: If index is out of bound, return 0
    if(index >= arr.length){
        return 0;
    }
    //  Check if the current element is the target
    const count = arr[index] === target ? 1 : 0;

    // Recursive Call: Cunt occurrences in the rest of the array
    return count + countOccurrences(arr, target, index+1);

}
console.log(countOccurrences([1,2,3,2,2,4,3,5],2)); // 3, TC=O(n), SC=O(n)

// Activity 5: Tree Traversal
// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

// In-order-> left-> root->right
// Visit the left subtree
// Visit the current node(root)
// Visit the right node


// Structure of a tree node
class Node {
    constructor(value) {
        // Initialize the node with a given value
        this.data = value;
        // Initialize left and right children to null
        this.left = null;
        this.right = null;
    }
}

// Function to print in-order traversal
function printInorder(node) {
    // Base case: If the node is null, return (end of branch)
    if (node === null) {
        return;
    }

    // First recur on left subtree
    printInorder(node.left);

    // Now deal with the node (print the node's data)
    console.log(node.data);

    // Then recur on right subtree
    printInorder(node.right);
}

// Create nodes and build the binary tree
const root = new Node(1); // Create the root node with value 1
root.left = new Node(2); // Create left child of root with value 2
root.right = new Node(3); // Create right child of root with value 3
root.left.left = new Node(4); // Create left child of node 2 with value 4
root.left.right = new Node(5); // Create right child of node 2 with value 5
root.right.right = new Node(6); // Create right child of node 3 with value 6

// Function call
console.log("Inorder traversal of binary tree is: "); // Log the message before traversal
printInorder(root); // Perform in-order traversal starting from the root


// TC = O(n) as each node is visited exactly once, SC=O(n) 


// Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

// Definition for a binary tree node.
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Recursive function to calculate the depth of the binary tree
function calculateDepth(node) {
    // Base case: If the node is null, the depth is 0
    if (node === null) {
        return 0;
    }

    // Recursively calculate the depth of the left and right subtrees
    const leftDepth = calculateDepth(node.left);
    const rightDepth = calculateDepth(node.right);

    // The depth of the current node is 1 plus the maximum depth of its subtrees
    return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:

// Create a sample binary tree
const root1 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3,
        null,
        new TreeNode(6)
    )
);

// Log the depth of the binary tree
console.log("Depth of the binary tree is: ", calculateDepth(root)); // Output: 3


// TC=O(n) as Each node is visited exactly once, SC=O(n)